const express = require('express');
const authController = require('../../controllers/authController');
const router = express.Router();

// Register a user
router.post('/register', authController.registerUser);

module.exports = router;
