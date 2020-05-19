var Sequelize = require('sequelize');
var sequelizeConnection = require('../config/databaseConnection');

const DATATABLENAME = "country";

var country = sequelizeConnection.define(
    DATATABLENAME,
    {
        idcountry: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        contry_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
    {
        tableName: DATATABLENAME,
        timestamps: false
    }
);

module.exports = country;