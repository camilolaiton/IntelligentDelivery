const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/databaseConnection');

// Importing required models
const country = require('./countryModel');
const deliveryType = require('./deliveryTypeModel');
const deliveryState = require('./deliveryStateModel');
const user = require('./userModel');

const DATATABLENAME = "delivery";

var delivery = sequelizeConnection.define(
    DATATABLENAME,
    {
        iddelivery: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        address1: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        postal_code: {
            type: Sequelize.INTEGER(11),
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        },
        order_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        deliver_date: {
            type: Sequelize.DATE,
            allowNull: true
        },
        region: {
            type: Sequelize.STRING,
            allowNull: false
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false
        },
        country_idcountry: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            references: {
                model: country,
                key: 'idcontry'
            }
        },
        iddelivery_type: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: deliveryType,
                key: 'iddelivery_type'
            }
        },
        user_iduser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: user,
                key: 'iduser'
            }
        },
        delivery_state_iddelivery_state: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: deliveryState,
                key: 'iddelivery_state'
            }
        }
    },
    {
        tableName: DATATABLENAME,
    }
);

delivery.belongsTo(country, {foreignKey: 'country_idcountry'});
delivery.belongsTo(deliveryType, {foreignKey: 'iddelivery_type'});
delivery.belongsTo(user, {foreignKey: 'user_iduser'});
delivery.belongsTo(deliveryState, {foreignKey: 'delivery_state_iddelivery_state'});
module.exports = delivery;