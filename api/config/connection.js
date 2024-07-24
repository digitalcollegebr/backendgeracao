const { Sequelize } = require("sequelize");

const connection = new Sequelize({
    dialect: 'mysql',
    database: "blog",
    host: "localhost",
    username: "root",
    password: "root",
    port: 3306
});

module.exports = connection;



