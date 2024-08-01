const express = require('express');
const PostsController = require('../controllers/PostsController')
const PostsRotas = express.Router();

const postsController = new PostsController();
// CRUD
PostsRotas.get('/posts', postsController.listar);
PostsRotas.get('/posts/:id', postsController.consultarPorId);
PostsRotas.post('/posts', postsController.criar)
PostsRotas.put('/posts/:id', postsController.atualizar)
PostsRotas.delete('/posts/:id', postsController.deletar)

module.exports = PostsRotas;