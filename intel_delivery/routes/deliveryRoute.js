const express = require('express');
const router = express.Router();

const deliveryController = require('../controllers/deliveryController');

// [GET] https:localhost:5000/delivery/getDeliveries
router.get('/getDeliveries', deliveryController.getDeliveries);

// [GET] https:localhost:5000/delivery/getUserDeliveries/:iduser
router.get('/getUserDeliveries/:iduser', deliveryController.getUserDeliveries);

// [POST] https:localhost:5000/delivery/createDelivery
router.post('/createDelivery', deliveryController.createDelivery);

// [POST] https:localhost:5000/delivery/updateDelivery/:iddelivery
router.post('/updateDelivery/:iddelivery', deliveryController.updateDelivery);

module.exports = router;