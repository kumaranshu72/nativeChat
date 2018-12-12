const Sequelize = require('sequelize');
const conn = new Sequelize('chat_app_db', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

module.exports = conn;
