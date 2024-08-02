const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const PostModel = require('./PostModel');
const UserModel = require('./UserModel');

class CommentsModel extends Model {
  static associate () {
    CommentsModel.hasOne(CommentsModel, {
        foreignKey: "parent_id",
        as: 'children'
    });
    
    CommentsModel.belongsTo(CommentsModel, {
        foreignKey: "parent_id",
        as: "parents"
    });
  }
}

CommentsModel.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: 'id'
      },
      onDelete: "NO ACTION"
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: PostModel,
          key: 'id'
        },
        onDelete: "CASCADE"
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
    }
  },
  {
    timestamps: true,
    tableName: 'comments',
    sequelize: connection,
  }
);

module.exports = CommentsModel;