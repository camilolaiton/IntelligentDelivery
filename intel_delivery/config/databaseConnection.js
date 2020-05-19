var Sequelize = require('sequelize');
const secrets = require('./secrets');

const DATABASE_USER = secrets.USERNAME;
const DATABASE_PASSWORD = secrets.PASSWORD;

const sequelize = new Sequelize("intel_delivery", DATABASE_USER, DATABASE_PASSWORD, {
    host: '127.0.0.1', dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName:true
    }, 
    operatorAliases: false
});

module.exports = sequelize;