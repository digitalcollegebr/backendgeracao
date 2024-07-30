const PostModel = require('../models/PostModel');
const UserModel = require('../models/UserModel');
const ProfileModel = require('../models/ProfileModel');
const PostTagModel = require('../models/PostTagModel');
const TagModel = require('../models/TagsModel');

class PostsController {

    constructor() {
        UserModel.associate({ProfileModel})
        PostModel.associate({
            TagModel,
            PostTagModel,
            UserModel
        });
    }

    async listar(request, response) {
        
        
        const dados = await PostModel.findAll({
            include: [
                {
                    model: UserModel,
                    include: ProfileModel
                },
                {
                    model: TagModel
                }
            ]
        });
        return response.json(dados);
    }
    
    async criar(request, response) {

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