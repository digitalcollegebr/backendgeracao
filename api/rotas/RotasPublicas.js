const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const AuthController = require('../controllers/AuthController');

const RotasPublicas = express.Router();

RotasPublicas.post('/login', (request, response) => {
    const body = request.body;
    const auth = new AuthController();
    const dados = auth.login(body.login, body.senha);
    if(dados) {
        const token = jwt.sign(dados, process.env.APP_KEY_TOKEN)
        return response.json({
            token: token
        })
    }
    
    return response.json({
        message: "Login ou senha incorreto"
    })

});

module.exports = RotasPublicas;