const express = require('express');
const authController = require('../../controllers/authController');
const router = express.Router();

// Register a user
router.post('/register', authController.registerUser);

// Login a user
router.post('/login', authController.login);
module.exports = router;
