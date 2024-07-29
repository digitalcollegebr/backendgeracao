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
    return next();
    let auth = false;

    if(request.headers.token) {
        const { token } = request.headers;
        try {
            jwt.verify(token, process.env.APP_KEY_TOKEN);
            auth = true;
        } catch(e) {
            return response.status(403).send(e);
        }
    } 

    if(auth === false) {
        return response.status(403).send("Não Autorizado");
    }

    next();
});

RotasPrivadas.use(UserRotas);
RotasPrivadas.use(PostsRotas);
RotasPrivadas.use(TagsRotas);
RotasPrivadas.use(UserTypesRotas);
RotasPrivadas.use(CommentsRotas);

module.exports = RotasPrivadas;