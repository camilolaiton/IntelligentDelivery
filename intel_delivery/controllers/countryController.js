const controller = {};

// Import model
const country = require('../models/countryModel');

controller.getCountries = async (req, res) => {
    
    var query_state = true;

    const data = await country.findAll()
    .then(function(data) {
        return data;
    })
    .catch(err => {
        query_state = false;
        return err;
    });

    res.json({success: query_state, countries: data});
};

module.exports = controller;