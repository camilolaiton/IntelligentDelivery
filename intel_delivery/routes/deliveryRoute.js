const express = require('express');
const router = express.Router();

const deliveryController = require('../controllers/deliveryController');

// [GET] https:localhost:5000/delivery/getDeliveries
router.get('/getDeliveries', deliveryController.getDeliveries);

// [GET] https:localhost:5000/delivery/getUserDeliveries
router.get('/getUserDeliveries/:iduser', deliveryController.getUserDeliveries);

// [GET] https:localhost:5000/delivery/createDelivery
router.get('/createDelivery', deliveryController.createDelivery);

module.exports = router;