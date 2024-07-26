const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const UserModel = require("./UserModel");

class PostModel extends Model {}

PostModel.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserModel,
            key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT
    },
    image_path: {
        type: DataTypes.STRING(255)
    }
},{
    sequelize: connection,
    tableName: "posts"
})

module.exports = PostModel;