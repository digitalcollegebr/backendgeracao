const connection = require('../config/connection');
const { DataTypes } = require("sequelize");

const UserTypesModel = connection.define(
    "UserTypesModel",
    {
        type: {
            type: DataTypes.STRING(45), // VARCHAR(45)
            allowNull: false // NOT NULL
        }
    },
    {
        tableName: "user_types"
    }
);

connection.sync({force: true});

module.exports = UserTypesModel;