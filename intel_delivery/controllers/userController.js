const controller = {}

// Import model
var user = require('../models/userModel');
var userType = require('../models/userTypeModel');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

controller.getAllUsers = async (req, res) => {
    
    var query_state = true;

    const data = await user.findAll({
        include: [userType],
    })
    .then(function(data){
        return data;
    })
    .catch(error => {
        query_state = false;
        return error;
    }); 
    
    res.json({success: query_state, clients: data});
};

controller.getClients = async (req, res) => {

    var query_state = true;

    const data = await user.findAll({
        include: [userType],
        where: {
            user_type_iduser_type: [2]
        }
    })
    .then(function(data){
        return data;
    })
    .catch(error => {
        query_state = false;
        return error;
    }); 
    
    res.json({success: query_state, clients: data});
};

controller.getClientByUsername = async (req, res) => {

    var query_state = true;

    console.log(req.params);

    const data = await user.findAll({
        include: [userType],
        limit: 1,
        where: {
            [Op.and]:[
                {
                [Op.or]:[
                    {
                        username: [req.params.username]
                    },
                    {
                        email: [req.params.username]
                    }
                ]
                },
                {
                    password: req.params.password
                }
            ]
        }
    })
    .then(function(data){
        return data;
    })
    .catch(error => {
        query_state = false;
        return error;
    }); 
    
    res.json({success: query_state, client: data});
};

controller.createUser = async (req, res) => {

    var query_state = true;

    const data = await user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        user_type_iduser_type: req.body.userType,
    })
    .then(function(data) {
        return data;
    })
    .catch(err => {
        query_state = false;
        return err;
    });

    res.json({success: query_state, data: data});
};

module.exports = controller;