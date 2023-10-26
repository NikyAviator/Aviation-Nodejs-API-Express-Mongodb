const express = require('express');
const bootcampController = require('../../controllers/bootcampController');
const auth = require('../../middleware/auth');

// Include other resource routers
const courseRouter = require('./coursesRoutes');
const reviewRouter = require('./reviewsRoutes');

const router = express.Router();

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);
router.use('/:bootcampId/reviews', reviewRouter);

// Import Bootcamp model
const Bootcamp = require('../../models/Bootcamp');
// Middleware for advanced results
const advancedResults = require('../../middleware/advancedResults');

// Get ALL Bootcamps
router.get(
  '/',
  advancedResults(Bootcamp, 'courses'),
  bootcampController.getAllBootcamps
);
// Get ONE Bootcamp
router.get('/:id', bootcampController.getOneBootcamp);
// Create a new Bootcamp
router.post(
  '/',
  auth.protect,
  auth.authorize('publisher', 'admin'),
  bootcampController.createOneBootcamp
);
// Update a Bootcamp
router.put(
  '/:id',
  auth.protect,
  auth.authorize('publisher', 'admin'),
  bootcampController.updateOneBootcamp
);
// Delete a Bootcamp
router.delete(
  '/:id',
  auth.protect,
  auth.authorize('publisher', 'admin'),
  bootcampController.deleteABootcamp
);
// Get Bootcamps within a radius
router.get(
  '/radius/:zipcode/:distance',
  bootcampController.getBootcampsInRadius
);
// Upload a photo for a Bootcamp
router.put(
  '/:id/photo',
  auth.protect,
  auth.authorize('publisher', 'admin'),
  bootcampController.bootcampPhotoUpload
);

module.exports = router;
