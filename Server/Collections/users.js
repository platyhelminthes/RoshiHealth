// /backend/data.js
const mongoose = require("mongoose");
Schema = mongoose.Schema,
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;

// this will be our data base's data structure 

const gameSchema = new Schema ({
    exp: Number
})

const subTasksSchema = new Schema({

    providerId: {
        type: String,
        require: true
    },
    providerName: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    finished: {
        type: String,
        enum: ["Finished", "Active", "Failed"],
        default: "Active"
    },
    dueDate: {
        type: String,
        require: true
    },
    dateAssigned: String,
    extraInfo: String,
    seen: Boolean
})


const subscriptionSchema = new Schema ({

    dietitian: {
        name: String,
        id: String,
        appointmentTokens: Number,
        appointments: Number,
        appointment: Date
    },
    healthCounselor: {
        name: String,
        id: String,
        appointmentTokens: Number,
        appointments: Number,
        appointment: Date
    },
    nurse: {
        initialConsultation: {
            type: Boolean,
            default: false
        },
        name: String,
        id: String,
        followUp: {
            type: Boolean,
            default: false
        }
    },
    started: Date,
    yearMark: Date,
    months: Number,
    subTasks: [subTasksSchema]
})




const tasksSchema = new Schema({

        providerId: {
            type: String,
            require: true
        },
        providerName: {
            type: String,
            require: true
        },
        text: {
            type: String,
            require: true
        },
        finished: {
            type: String,
            enum: ["Finished", "Active", "Failed"],
            default: "Active"
        },
        dueDate: {
            type: Date,
            require: true,
            default: Date.now()
        },
        extraInfo: String
    })

const providersSchema = new Schema({
    providerId: {
        type: String
    },
})

const shoppingCartItems = new Schema({
    itemId: {
        type: String,
    },
    name: {
        type: String
    },
    amount: {
        type: Number,
    },
    cost: {
        type: Number
    },
    docType: {
        type: String
    },
    totalCost: {
        type: Number
    }
})

const appointmentsSchema = new Schema({
    date: {
        type: Date
    },
    user: {
        type: String
    },
    userName: {
        type: String
    },
    price: Number,
    subAPP: Boolean,
    subType: {
        type: String,
        enum: ['Health Counselor', 'Dietitian', 'Nurse', 'None']
    }
})

const shoppingCartSchema = new Schema({
    items: [shoppingCartItems],
    total: {
        type: Number,
        default: 0
    },
    finishedTransaction: {
        type: String,
        enum: ['Failed', 'Finished', 'Active'],
        default: 'Active'
    }
})

const daysSchema = new Schema({
    date: String,
    times: [String]
})



const accounts = new Schema({
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
    appointments: [appointmentsSchema],
    tasks: [tasksSchema],
    shoppingCart: {
        type: [shoppingCartSchema],
        required: true
    },
    providers: [providersSchema],
    providerInfo: {
        providerType: {
            type: String,
            require: true,
            default: "Patient"
    },
        patientIds: {
            type: [String]
    },
        availability: {
            monday: [String],
            tuesday: [String],
            wednesday: [String],
            thursday: [String],
            friday: [String],
            saturday: [String],
            sunday: [String]
    },
        availableDays: [daysSchema],
        subInfo: {
            healthCounselor: String,
            doctors: [String],
            healthCounselorTokens: Number,
            teamTokens: Number,
            subRenewDate: Date
    },
    cost: Number,
    pay: Number
    },
    doctorsToAdd: [String],
    wallet: Number,
    confirmation: String,
    confirmed: Boolean,
    phone: String,
    texts: Boolean,
    hourReminders: Boolean,
    profilePicURL: String,
    state: String,
    subscription: subscriptionSchema,
    state: String,
    address: {
        street: String,
        city: String,
        state: String,
        postalcode: Number,
        country: String
    },
    game: gameSchema,
    resetNum: String
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