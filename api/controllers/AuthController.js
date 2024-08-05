const UserModel = require("../models/UserModel");
const MD5 = require('crypto-js/md5')

class AuthController {
    async login(username, password) {
        const dados = await UserModel.findAll({
            where: {
                username: username,
                password: MD5(password).toString()
            }
        })

        if(dados.length) {
            return dados[0];
        }
        return null;
    }
}

module.exports = AuthController;