const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');

class Tags extends Model {}

Tags.init(
  {
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
  },
  {
    timestamps: false,
    sequelize: connection,
  }
);

module.exports = Tags;