// /backend/data.js
const mongoose = require("mongoose");
Schema = mongoose.Schema,
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;

// this will be our data base's data structure 
const Accounts = new Schema(
  {
    email: String,
    password: String,
  },
  { timestamps: true }
);

Accounts.pre('save', function(next) {
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

Accounts.methods.comparePassword = function(candidatePassword, cb) {
    console.log(candidatePassword + " recieved")

    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        console.log(this.password + " inHash")
        console.log(candidatePassword + " in dehash")
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


module.exports = mongoose.model("users", Accounts);