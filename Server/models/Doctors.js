module.exports = function (sequelize, DataTypes) {

    var Doctors = sequelize.define("Doctors", {
        id: {
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        Name: {
            type: DataTypes.STRING,
        },
        Type: {
            type: DataTypes.STRING,
        }
        });
    return Doctors;
};