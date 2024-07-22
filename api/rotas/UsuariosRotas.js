const express = require('express');
const UsuariosController = require('../controllers/UsuariosController')
const UsuariosRotas = express.Router();

const usuariosController = new UsuariosController();
// CRUD
UsuariosRotas.get('/users', usuariosController.listar);
UsuariosRotas.get('/users/:id', usuariosController.consultarPorId);
UsuariosRotas.post('/users', usuariosController.criar)
UsuariosRotas.put('/users/:id', usuariosController.atualizar)
UsuariosRotas.delete('/users/:id', usuariosController.deletar)

module.exports = UsuariosRotas;