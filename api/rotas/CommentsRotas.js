const express = require('express');
const CommentsController = require('../controllers/CommentsController')
const CommentsRotas = express.Router();

const commentsController = new CommentsController();

// CRUD
CommentsRotas.get('/comments', commentsController.listar);
CommentsRotas.post('/comments', commentsController.criar);

module.exports = CommentsRotas;