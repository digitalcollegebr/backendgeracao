const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const UserModel = require("./UserModel");
const CommentsModel = require("./CommentsModel");

class PostModel extends Model {
    static associate({PostTagModel, UserModel, TagModel}) {
        PostModel.hasMany(CommentsModel, {foreignKey: "post_id", onDelete: "CASCADE"})
        PostModel.belongsTo(UserModel, {foreignKey: "user_id"});
        PostModel.belongsToMany(TagModel, {
            through: PostTagModel,
            foreignKey: 'post_id',
            otherKey: 'tag_id'
        });
    }
}

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