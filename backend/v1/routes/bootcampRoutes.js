const express = require('express');
const bootcampController = require('../../controllers/bootcampController');

const router = express.Router();

router.get('/bootcamps', bootcampController.getAllBootcamps);

module.exports = router;
