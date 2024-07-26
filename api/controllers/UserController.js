const UserModel = require('../models/UserModel');
const ProfileModel = require('../models/ProfileModel');

class UserController {

    async listar(request, response) {
        UserModel.hasOne(ProfileModel, {foreignKey: "user_id"});
        
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
        UserModel.create(body);
        return response.status(201).json({
            message: "Usuário cadastrado com sucesso"
        });
    }
}

module.exports = UserController;