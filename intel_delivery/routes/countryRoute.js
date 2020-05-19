const express = require('express');
const router = express.Router();

const countryController = require('../controllers/countryController');

// [GET] https://localhost:5000/country/getCountries
router.get('/getCountries', countryController.getCountries);

module.exports = router;