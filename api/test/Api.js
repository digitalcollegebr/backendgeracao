const axios = require('axios')

const Api = axios.create({
    baseURL: 'http://localhost:3000/'
})

module.exports = Api;