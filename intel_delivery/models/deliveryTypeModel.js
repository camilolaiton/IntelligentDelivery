const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/databaseConnection');

const DATATABLENAME = 'delivery_type';

var delivery_type = sequelizeConnection.define(
    DATATABLENAME,
    {
        iddelivery_type: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        delivery_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
    {
        tableName: DATATABLENAME,
        timestamps: false
    }
);

module.exports = delivery_type;