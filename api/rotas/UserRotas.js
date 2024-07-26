const express = require('express');
const UserController = require('../controllers/UserController')
const UsuariosRotas = express.Router();

const userController = new UserController();
// CRUD
UsuariosRotas.get('/users', userController.listar);
// UsuariosRotas.get('/users/:id', userController.consultarPorId);
UsuariosRotas.post('/users', userController.criar)
// UsuariosRotas.put('/users/:id', userController.atualizar)
// UsuariosRotas.delete('/users/:id', userController.deletar)

module.exports = UsuariosRotas;