const express = require('express');
const reviewsController = require('../../controllers/reviewController');
const router = express.Router({ mergeParams: true });
const advancedResults = require('../../middleware/advancedResults');
const Review = require('../../models/Review');
const auth = require('../../middleware/auth');

// Get all reviews
router.get(
  '/',
  advancedResults(Review, {
    path: 'bootcamp',
    select: 'name description',
  }),
  reviewsController.getReviews
);

// Get single review
router.get('/:id', reviewsController.getReview);

// Create review
router.post(
  '/',
  auth.protect,
  auth.authorize('user', 'admin'),
  reviewsController.createReview
);

module.exports = router;
