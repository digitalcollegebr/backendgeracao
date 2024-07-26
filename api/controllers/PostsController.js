const PostModel = require('../models/PostModel');
const UserModel = require('../models/UserModel');
const ProfileModel = require('../models/ProfileModel');
const PostTagModel = require('../models/PostTagModel');
const TagModel = require('../models/TagsModel');

class PostsController {

    async listar(request, response) {
        PostModel.belongsTo(UserModel, {foreignKey: "user_id"});
        UserModel.hasOne(ProfileModel, {foreignKey: 'user_id'});
        
        const dados = await PostModel.findAll({
            include: {
                model: UserModel,
                include: ProfileModel
            }
        });
        return response.json(dados);
    }
    
    async criar(request, response) {
        
        PostModel.belongsToMany(TagModel, {
            through: PostTagModel,
            foreignKey: 'post_id',
            otherKey: 'tag_id'
        });

        const {tags, ...body} = request.body;

        let post = await PostModel.create(body, {
            include: {
                through: PostTagModel,
                model: TagModel
            }
        });

        post.setTags(tags);

        return response.status(201).json({
            message: "Post cadastrado com sucesso"
        })
    }
}

module.exports = PostsController;