const connection = require('../config/connection');

require('../models/UserTypesModel');
require('../models/TagsModel');

connection.sync({force: true});