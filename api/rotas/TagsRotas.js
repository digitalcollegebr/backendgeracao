const express = require('express');
const TagsRotas = express.Router();
let tagsController = require('../controllers/TagsController')

tagsController = new tagsController();

TagsRotas.get('/tags', tagsController.listar);
TagsRotas.post('/tags', tagsController.criar)

module.exports = TagsRotas;