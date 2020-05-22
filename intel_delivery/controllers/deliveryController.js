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

    console.log(req.body);

    const data = await delivery.create({
        price: 25000, 
        address1: req.body.address1, 
        address2: req.body.address2, 
        postal_code: req.body.postal_code, 
        description: req.body.description, 
        order_date: req.body.order_date,
        deliver_date: req.body.deliver_date,
        region: req.body.region,
        city: req.body.city,
        country_idcountry: req.body.idcountry,
        iddelivery_type: req.body.iddelivery_type,
        user_iduser: req.body.iduser,
        delivery_state_iddelivery_state: req.body.iddelivery_state,
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

controller.updateDelivery = async (req, res) => {
    
    var query_state = true;

    const idDelivery = req.params.iddelivery;
    const iddelivery_state = req.body.iddelivery_state;

    const data = await delivery.update({
        delivery_state_iddelivery_state: iddelivery_state
    },
    {
        where: {
            iddelivery: idDelivery
        }
    })
    .then(function(data) {
        return data;
    })
    .catch(err => {
        query_state = false;
        return err;
    })

    res.json({success: query_state, data: data});
}

module.exports = controller;