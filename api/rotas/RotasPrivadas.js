const express = require('express');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const UserRotas = require('./UserRotas');
const PostsRotas = require('./PostsRotas');
const TagsRotas = require("./TagsRotas");
const UserTypesRotas = require("./UserTypesRotas");
const CommentsRotas = require("./CommentsRotas");

const RotasPrivadas = express.Router();

// Middleware
RotasPrivadas.use((request, response, next) => {
    // VERIFICA SE TEM AUTORIZACAO OU NAO
    const token = request.headers.token;
    try {
        jwt.verify(token, process.env.APP_KEY_TOKEN)
    }catch(JsonWebTokenError) {
        return response.status(403).send("Não autorizado")
    }
    next();
});

RotasPrivadas.use(UserRotas);
RotasPrivadas.use(PostsRotas);
RotasPrivadas.use(TagsRotas);
RotasPrivadas.use(UserTypesRotas);
RotasPrivadas.use(CommentsRotas);

module.exports = RotasPrivadas;