const PostModel = require('../models/PostModel');

class PostsController {

    listar(request, response) {
        const dados = PostModel.listar();
        return response.json(dados);
    }

    consultarPorId(request, response) {
        const id = request.params.id;
        const dados = PostModel.consultarPorId(id)
        return response.json(dados);
    }

    criar(request, response) {
        const body = request.body;
        PostModel.criar(body);
        return response.status(201).json({
            message: "Post cadastrado com sucesso"
        })
    }

    atualizar(request, response) {
        const id = request.params.id;
        const body = request.body;
        PostModel.atualizar(id, body)
        return response.json({
            message: "Post atualizado com sucesso"
        })
    }

    deletar(request, response) {
        const id = request.params.id;
        PostModel.deletar(id);
        return response.json({
            message: "Post removido com sucesso"
        })
    }
}

module.exports = PostsController;