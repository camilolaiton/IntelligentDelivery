const controller = {};

// Import model
var deliveryState = require('../models/deliveryStateModel');

controller.getDeliveryStates = async (req, res) => {

    var query_state = true;

    const data = await deliveryState.findAll()
    .then(function(data) {
        return data;
    })
    .catch(err => {
        query_state = false;
        return err;
    });

    res.json({success: query_state, deliveryStates: data});
}

module.exports = controller;