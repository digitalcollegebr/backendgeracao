const express = require('express')
const cors = require('cors')
const RotasPrivadas = require('./rotas/RotasPrivadas');
const RotasPublicas = require('./rotas/RotasPublicas');

const host = "localhost"
const port = 3000;

const app = express()
app.use(express.json())
app.use(cors());

app.get('/', (request, response) => {
    return response.send("Olá, eu sou um Backend com NodeJS + Express")
});

app.use(RotasPublicas);
// ROTAS PRIVADAS
app.use(RotasPrivadas)


// PASSAGEM DE DADOS PARA BACKEND
app.put('/teste/:codigo', (request, response) => {
    // Querys
    const query = request.query;
    let dados = "Query: " + query.nome + " - " + query.sobrenome;

    // Params
    const params = request.params;
    dados += "<br > Params: " + params.codigo
    
    // Body
    const body = request.body;
    dados += "<br > Body: " + JSON.stringify(body);
    
    return response.send(dados);
});

app.listen(port, host, () => {
    console.log(`Servidor executando em http://${host}:${port}`)
});