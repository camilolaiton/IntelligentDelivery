const express = require('express');
const router = express.Router();

const deliveryTypeController = require('../controllers/deliveryTypeController');

// [GET] https://localhost:5000/deliveryType/getDeliveryStates
router.get('/getDeliveryTypes', deliveryTypeController.getDeliveryTypes);

module.exports = router;