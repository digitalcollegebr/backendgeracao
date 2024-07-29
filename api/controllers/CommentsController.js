
const CommentsModel = require('../models/CommentsModel');
const PostModel = require('../models/PostModel');

class CommentsController {

    async listar(request, response) {
        CommentsModel.hasMany(CommentsModel, {
            foreignKey: 'parent_id'
        });

        const dados = await CommentsModel.findAll({
            include: {
                model: CommentsModel,
            }
        });

        return response.json(dados);
    }
    
    async criar(request, response) {
        let body = request.body;
        CommentsModel.create(body);

        return response.status(201).json({
            message: "Post cadastrado com sucesso"
        });
    }
}

module.exports = CommentsController;