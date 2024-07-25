const UserModel = require('../models/UserModel');
const ProfileModel = require('../models/ProfileModel');

async function execute() {

    let user = await UserModel.create({
        is_active: 1,
        email: "jhon@mail.com",
        username: "jhon",
        password: 123
    });

    let profile = await ProfileModel.create({
        user_id: user.id,
        firstname: "Jhon",
        surname: "Smith"
    })

    console.log(profile);

}

execute();