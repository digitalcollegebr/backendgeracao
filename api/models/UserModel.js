const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const UserTypesModel = require("./UserTypesModel");

class UserModel extends Model {}

UserModel.init(
  {
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserTypesModel,
        key: 'id'
      }
    },
    is_active: {
        type: DataTypes.TINYINT(1),
        defaultValue: 0,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
  },
  {
    tableName: "users",
    sequelize: connection,
  }
);

module.exports = UserModel;