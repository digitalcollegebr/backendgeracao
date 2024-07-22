class PostModel {
    static lista = [
        {
            id: 1,
            titulo: "HTML e CSS",
            conteudo: "",
            user_id: 1
        },
        {
            id: 2,
            titulo: "JS a Melhor Linguagem",
            conteudo: "",
            user_id: 2
        }
    ];

    static listar() {
        return PostModel.lista;
    }

    static consultarPorId(id) {
        const dados = PostModel.lista.filter(item => item.id == id);
        return dados;
    }

    static criar(data) {
        PostModel.lista.push(data)
    }

    static atualizar(id, data) {
        const indice = PostModel.lista.findIndex(item => item.id == id);
        PostModel.lista[indice] = data;
    }

    static deletar(id) {
        const dados = PostModel.lista.filter(item => item.id != id);
        PostModel.lista = dados;
    }

}

module.exports = PostModel;