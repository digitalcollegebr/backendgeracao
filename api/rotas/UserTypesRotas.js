const express = require('express');
const UserTypesRotas = express.Router();
const UserTypesController = require('../controllers/TagsController')

const userTypesController = new UserTypesController();

UserTypesRotas.get('/tags', userTypesController.listar);
UserTypesRotas.post('/tags', userTypesController.criar)

module.exports = UserTypesRotas;