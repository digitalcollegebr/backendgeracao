const connection = require('../config/connection');

require('../models/UserTypesModel');
require('../models/TagsModel');
require('../models/UserModel');
require('../models/ProfileModel');

connection.sync({force: true});