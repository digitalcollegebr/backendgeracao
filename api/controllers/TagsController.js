const TagsModel = require('../models/TagsModel');

class TagsController {
    
    async listar(request, response) {
        let dados = await TagsModel.findAll();
        return response.json(dados);
    }

    async criar(resquest, response) {
        let body = resquest.body;
        await TagsModel.create(body);
        response.status(201).json({
            message: "Tag criada com sucesso!"
        });
    }
}

module.exports = TagsController;