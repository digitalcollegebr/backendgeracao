const connection = require('../config/connection');

require('../models/UserTypesModel');
require('../models/TagsModel');
require('../models/UserModel');
require('../models/ProfileModel');
require('../models/PostModel');
require('../models/PostTagModel');

connection.sync({force: true});