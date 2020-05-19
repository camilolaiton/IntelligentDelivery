const express = require('express');
const router = express.Router();

const userTypeController = require('../controllers/userTypeController');
router.get('/getAllTypeUsers', userTypeController.getAllTypeUsers);

router.get('/testData', (req, res) => {
    res.json({status: 'User saved!'});
});

module.exports = router;