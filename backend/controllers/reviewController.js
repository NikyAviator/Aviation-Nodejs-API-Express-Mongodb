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

// @desc     Get a single review
// @route    GET /api/v1/reviews/:id
// @access   Public
const getReview = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id).populate({
    path: 'bootcamp',
    select: 'name description',
  });

  if (!review) {
    return next(
      new ErrorResponse(`No review found with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: review,
  });
});

// @desc     Create a review
// @route    POST /api/v1/bootcamps/:bootcampId/reviews
// @access   Private
const createReview = asyncHandler(async (req, res, next) => {
  // add the bootcamp id to the body
  req.body.bootcamp = req.params.bootcampId;
  // add the user id to the body
  req.body.user = req.user.id;

  const bootcamp = await Bootcamp.findById(req.params.bootcampId);

  // check if the bootcamp exists
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `No bootcamp found with the id of ${req.params.bootcampId}`,
        404
      )
    );
  }

  // create the review
  const review = await Review.create(req.body);

  res.status(201).json({
    success: true,
    data: review,
  });
});

// @desc     Update a review
// @route    PUT /api/v1/reviews/:id
// @access   Private
const updateReview = asyncHandler(async (req, res, next) => {
  let review = await Review.findById(req.params.id);

  if (!review) {
    return next(
      new ErrorResponse(`No review found with the id of ${req.params.id}`, 404)
    );
  }

  // check if the user is the owner of the review or an admin
  if (review.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new ErrorResponse(`Not authorized to update this review`, 401));
  }

  // update the review
  review = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  // return the updated review
  res.status(200).json({
    success: true,
    data: review,
  });
});

// @desc     Delete a review
// @route    DELETE /api/v1/reviews/:id
// @access   Private
const deleteReview = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    return next(
      new ErrorResponse(`No review found with the id of ${req.params.id}`, 404)
    );
  }

  // check if the user is the owner of the review or an admin
  if (review.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new ErrorResponse(`Not authorized to delete this review`, 401));
  }

  // update the review
  await review.deleteOne();

  // return the deleted review metadata
  res.status(200).json({
    success: true,
    data: {},
  });
});

module.exports = {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
};
