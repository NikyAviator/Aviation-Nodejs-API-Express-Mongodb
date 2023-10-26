const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Review = require('../models/Review');
const Bootcamp = require('../models/Bootcamp');
const advancedResults = require('../middleware/advancedResults');

// @desc     Get ALL reviews
// @route    GET /api/v1/reviews
// @route    GET /api/v1/bootcamps/:bootcampId/reviews
// @access   Public
const getReviews = asyncHandler(async (req, res, next) => {
  if (req.params.bootcampId) {
    // get all reviews for a specific bootcamp
    const reviews = await Review.find({ bootcamp: req.params.bootcampId });

    return res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } else {
    // get all reviews
    res.status(200).json(res.advancedResults);
  }
});

module.exports = { getReviews };
