const MD5 = require('crypto-js/md5')

const UserModel = require('../models/UserModel');
const ProfileModel = require('../models/ProfileModel');

class UserController {

    constructor () {
        UserModel.associate({ProfileModel});
    }
    
    async listar(request, response) {
        const users = await UserModel.findAll({
            include: ProfileModel
        });
        return response.json(users);
        
        // let dados = users.map(async user => {
        //     let profile = await ProfileModel.findOne({
        //         where: {
        //             user_id: user.id
        //         }
        //     })
        //     user.setDataValue('profile', profile)
        //     return user;
        // });
        
        // dados = await Promise.all(dados);

        // console.log(dados)
    }

    criar(request, response) {
        const body = request.body;
        const password = MD5(body.password).toString()
        body.password = password;
        UserModel.create(body, {include: ProfileModel});
        return response.status(201).json({
            message: "Usuário cadastrado com sucesso"
        });
    }
}

module.exports = UserController;