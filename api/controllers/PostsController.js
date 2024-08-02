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
        let query = request.query;
        query = query.fields.split(',');
        const dados = await PostModel.findAll({
            attributes: query
        });
        return response.json(dados);
    }
    
    async consultarPorId(request, response) {
        let id = request.params.id;
        let post = await PostModel.findByPk(id, {
            attributes: ['title', 'slug', 'content'],
            include: {
                model: UserModel,
                attributes: ["email", "is_active", "username"],
                include: {
                    model: ProfileModel,
                    attributes: ['firstname', 'surname']
                }
            }
        });
        return response.json(post);
    }

    async criar(request, response) {

        const {tags, ...body} = request.body;

        let post = await PostModel.create(body, {
            include: {
                through: PostTagModel,
                model: TagModel
            }
        });

        // post.setTags(tags);

        return response.status(201).json({
            message: "Post cadastrado com sucesso"
        })
    }

    async atualizar(request, response) {
        const id = request.params.id;
        const body = request.body;
        await PostModel.update(body, { where: {id} });
        return response.json({
            message: "Post atualizado com sucesso!"
        })        
    }

    async deletar(request, response) {
        const id = request.params.id;
        await PostModel.destroy({ where: {id} });
        return response.json({
            message: "Post deletado com sucesso!"
        })
    }
}

module.exports = PostsController;