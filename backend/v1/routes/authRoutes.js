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

// Forgot password
router.post('/forgotpassword', authController.forgotPassword);

// Reset password
router.put('/resetpassword/:resettoken', authController.resetPassword);

// Update user details
router.put('/updatedetails', auth.protect, authController.updateDetails);

// Update password
router.put('/updatepassword', auth.protect, authController.updatePassword);
module.exports = router;
