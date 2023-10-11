const express = require('express');
const authController = require('../../controllers/authController');
const auth = require('../../middleware/auth');
const router = express.Router();

// Register a user
router.post('/register', authController.registerUser);

// Login a user
router.post('/login', authController.login);

// Get current logged in user
router.get('/me', auth.protect, authController.getMe);
module.exports = router;
