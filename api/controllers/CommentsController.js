const CommentsModel = require("../models/CommentsModel");

class CommentsController {

    constructor () {
        CommentsModel.associate();
    }

    async listar(request, response) {
        const dados = await CommentsModel.findAll({
            include: [
                {
                    model: CommentsModel,
                    as: 'children'
                },
                {
                    model: CommentsModel,
                    as: 'parents'
                }
            ]
        });
        return response.json(dados);
    }
    
    async criar(request, response) {
        const body = request.body
        CommentsModel.create(body);
        return response.status(201).json({
            message: "Comentário cadastrado com sucesso"
        })
    }
}

module.exports = CommentsController;