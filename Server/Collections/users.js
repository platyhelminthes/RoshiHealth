// /backend/data.js
const mongoose = require("mongoose");
Schema = mongoose.Schema,
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;

// this will be our data base's data structure 
const accounts = new Schema(
  {
    email: {
        type: String,
        require: true
},
    password: {
        type: String,
        require: true
},
    fullName : {
        type: String,
        require: true
},
    subLevel: {
        type: String,
        default: "0"
},
//    shoppingCart: {
//        nested: {
//        itemIds: {
//            type: [Number]
//        },
//        total: Number
//    }
//},
//    tasks: {
//        nested: {
//        id: {
//            type: Number,
//            require: true
//        },
//        text: {
//            type: String,
//            require: true
//        },
//        finished: {
//            type: String,
//            enum: ["Finished", "Active", "Failed"],
//            default: "Active"
//        },
//        dueDate: {
//            type: Date,
//            require: true
//        }
//    }
//},
//    reciepts: {
//        nested: {
//        id: {
//            type: Number,
//            require: true
//        },
//        itemIds: {
//            any: []
//        },
//        total: {
//            type: Number,
//            require: true
//        }
//    }
//  }
},
  { timestamps: true }
);

accounts.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

accounts.methods.comparePassword = function(candidatePassword, cb) {
    console.log(candidatePassword + " recieved")

    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        console.log(this.password + " inHash")
        console.log(candidatePassword + " in dehash")
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


module.exports = mongoose.model("users", accounts);