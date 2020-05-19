const express = require('express');
const router = express.Router();

const deliveryStateController = require('../controllers/deliveryStateController');

// [GET] https://localhost:5000/deliveryType/getDeliveryStates
router.get('/getDeliveryStates', deliveryStateController.getDeliveryStates);

module.exports = router;