const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/databaseConnection');

const DATATABLENAME = 'delivery_state';

var delivery_state = sequelizeConnection.define(
    DATATABLENAME,
    {
        iddelivery_state: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        delivery_state: {
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

module.exports = delivery_state;