const controller = {}

// Import model
var userType = require('../models/userTypeModel');

controller.getAllTypeUsers = async (req, res) => {
    
    var query_state = true;
    
    const RESPONSE = await sequelize.sync().then(function () {
        const DATA = userType.findAll();
        return DATA;
    })
    .catch(err => {
        var query_state = false;
        return err;
    });

    res.json({success: true, userTypes: RESPONSE});
};

controller.createUserType = async (req, res) => {

};

module.exports = controller;