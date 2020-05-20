const controller = {};

// Import model
var country = require('../models/countryModel');
var deliveryType = require('../models/deliveryTypeModel');
var user = require('../models/userModel');
var deliveryState = require('../models/deliveryStateModel');
var delivery = require('../models/deliveryModel');

controller.getDeliveries = async (req, res) => {

    var query_state = true;

    const data = await delivery.findAll({
        include: [
            country,
            deliveryType,
            user,
            deliveryState
        ]
    })
    .then(function(data) {
        return data;
    })
    .catch(err => {
        query_state = false;
        return err;
    });

    res.json({success: query_state, deliveries: data});
}

controller.getUserDeliveries = async (req, res) => {

    var query_state = true;
    const user_id = req.params.iduser;

    const data = await delivery.findAll({
        include: [
            country,
            deliveryType,
            user,
            deliveryState,
        ],
        where: {
            user_iduser: [user_id]
        }
    })
    .then(function(data) {
        return data;
    })
    .catch(err => {
        query_state = false;
        return err;
    });

    res.json({success: query_state, deliveries: data});
}

controller.createDelivery = async (req, res) => {

    var query_state = true;

    // Getting the data
    const { 
        _price, 
        _address1, 
        _address2, 
        _postal_code, 
        _description, 
        _order_date,
        _deliver_date,
        _region,
        _city,
        _idcountry,
        _iddelivery_type,
        _iduser,
        _iddelivery_state,
    } = req.body;

    const data = await delivery.create({
        price: _price, 
        address1: _address1, 
        address2: _address2, 
        postal_code: _postal_code, 
        description: _description, 
        order_date: _order_date,
        deliver_date: _deliver_date,
        region: _region,
        city: _city,
        country_idcountry: _idcountry,
        iddelivery_type: _iddelivery_type,
        user_iduser: _iduser,
        delivery_state_iddelivery_state: _iddelivery_state,
    })
    .then(function(data) {
        return data;
    })
    .catch(err => {
        query_state = false;
        return err;
    });

    res.json({success: query_state, data: data});
}

module.exports = controller;