const UserTypesModel = require('../models/UserTypesModel');

class UserTypesController {
    
    async listar(request, response) {
        let dados = await UserTypesModel.findAll();
        return response.json(dados);
    }

    async criar(resquest, response) {
        let body = resquest.body;
        await UserTypesModel.create(body);
        response.status(201).json({
            message: "Tag criada com sucesso!"
        });
    }
}

module.exports = UserTypesController;