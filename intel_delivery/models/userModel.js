var Sequelize = require('sequelize');
var sequelizeConnection = require('../config/databaseConnection');

// Importing userTypeModel for FK userTypeId
var userType = require('./userTypeModel');
const DATATABLENAME = "user";

var user = sequelizeConnection.define(
    DATATABLENAME,
    {
        iduser: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
        ,
        user_type_iduser_type: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            references: {
                model: userType,
                key: 'iduser_type'
            }
        }
    },
    {
        tableName: DATATABLENAME,
        timestamps: false
    }

);

user.belongsTo(userType, {foreignKey: 'user_type_iduser_type'});
module.exports = user;