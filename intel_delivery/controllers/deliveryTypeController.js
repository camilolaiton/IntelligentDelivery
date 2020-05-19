const controller = {};

// Import model
var deliveryType = require('../models/deliveryTypeModel');

controller.getDeliveryTypes = async (req, res) => {

    var query_state = true;

    const data = await deliveryType.findAll()
    .then(function(data) {
        return data;
    })
    .catch(err => {
        query_state = false;
        return err;
    });

    res.json({success: query_state, deliveryTypes: data});
}

module.exports = controller;