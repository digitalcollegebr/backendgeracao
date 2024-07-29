const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const UserModel = require("./UserModel");
const PostModel = require("./PostModel");

class CommentsModel extends Model {}

CommentsModel.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserModel,
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PostModel,
            key: 'id'
        }
    },
    parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: CommentsModel,
            key: 'id'
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
},{
    sequelize: connection,
    tableName: "comments"
})

module.exports = CommentsModel;