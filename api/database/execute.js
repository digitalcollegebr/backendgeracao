const UserModel = require('../models/UserModel');
const ProfileModel = require('../models/ProfileModel');

async function execute() {

    let user = await UserModel.create({
        is_active: 0,
        email: "mex@mail.com",
        username: "mex",
        password: 456
    });

    let profile = await ProfileModel.create({
        user_id: user.id,
        firstname: "Mex",
        surname: "Til"
    });

    console.log(profile);

}

execute();