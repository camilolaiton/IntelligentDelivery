const Sequelize = require('sequelize');
var sequelizeConnection = require('../config/databaseConnection');

const DATATABLENAME = "user_type";

module.exports = sequelizeConnection.define(
    DATATABLENAME, 
    {
        iduser_type: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, 
    {
      tableName: DATATABLENAME,
      timestamps: false
    }
);