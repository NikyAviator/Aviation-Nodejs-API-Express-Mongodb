const express = require('express');
const usersController = require('../../controllers/usersController');
const router = express.Router({ mergeParams: true });
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const advancedResults = require('../../middleware/advancedResults');
const Bootcamp = require('../../models/Bootcamp');

// Get all users
router.get(
  '/',
  auth.protect,
  auth.authorize('admin'),
  advancedResults(User),
  usersController.getUsers
);

// Get single user
router.get(
  '/:id',
  auth.protect,
  auth.authorize('admin'),
  usersController.getUser
);

// Create user
router.post(
  '/',
  auth.protect,
  auth.authorize('admin'),
  usersController.createUser
);

// Update user
router.put(
  '/:id',
  auth.protect,
  auth.authorize('admin'),
  usersController.updateUser
);

// Delete user
router.delete(
  '/:id',
  auth.protect,
  auth.authorize('admin'),
  usersController.deleteUser
);

module.exports = router;
