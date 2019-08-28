var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {

    var users = sequelize.define("users", {
        id: {
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        doctor: {
            type: DataTypes.STRING,
        },
        assesment: {
            type: DataTypes.STRING,
        },
        renewalDate: {
            type: DataTypes.DATE,
        },
        info: {
            type: DataTypes.STRING,
        },
        appointment: {
            type: DataTypes.DATE
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
            },
        phone: {
                type: DataTypes.STRING,
                allowNull: true
            },
        });

    // Creating a custom method for our User model. This will check if an unhashed password entered by the users can be compared to the hashed password stored in our database
    users.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    users.beforeCreate(function (Users) {
        Users.password = bcrypt.hashSync(Users.password, bcrypt.genSaltSync(10), null);
    });
    return users;
};