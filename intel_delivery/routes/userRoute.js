const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// [GET] https://localhost:5000/user/getAllUsers
router.get('/getUsers', userController.getAllUsers);

// [GET] https://localhost:5000/user/getClients
router.get('/getClients', userController.getClients);

// [POST] https://localhost:5000/user/createClient
router.post('/createUser', userController.createUser);

// [GET] https://localhost:5000/user/getClientByUsername
router.get('/getClientByUsername/:username', userController.getClientByUsername);

module.exports = router;