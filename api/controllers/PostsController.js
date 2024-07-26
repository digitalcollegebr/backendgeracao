const PostModel = require('../models/PostModel');
const UserModel = require('../models/UserModel');
const ProfileModel = require('../models/ProfileModel');

class PostsController {

    async listar(request, response) {
        PostModel.belongsTo(UserModel, {foreignKey: "user_id"});
        UserModel.hasOne(ProfileModel, {foreignKey: 'user_id'});
        
        const dados = await PostModel.findAll({
            include: {
                model: UserModel,
                include: ProfileModel
            }
        });
        return response.json(dados);
    }
    
    criar(request, response) {
        const body = request.body;
        PostModel.create(body);
        return response.status(201).json({
            message: "Post cadastrado com sucesso"
        })
    }
}

module.exports = PostsController;