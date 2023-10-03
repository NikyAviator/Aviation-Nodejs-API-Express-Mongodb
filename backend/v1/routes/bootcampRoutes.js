const express = require('express');
const bootcampController = require('../../controllers/bootcampController');

// Include other resource routers
const courseRouter = require('./coursesRoutes');

const router = express.Router();

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

// Get ALL Bootcamps
router.get('/', bootcampController.getAllBootcamps);
// Get ONE Bootcamp
router.get('/:id', bootcampController.getOneBootcamp);
// Create a new Bootcamp
router.post('/', bootcampController.createOneBootcamp);
// Update a Bootcamp
router.put('/:id', bootcampController.updateOneBootcamp);
// Delete a Bootcamp
router.delete('/:id', bootcampController.deleteABootcamp);
// Get Bootcamps within a radius
router.get(
  '/radius/:zipcode/:distance',
  bootcampController.getBootcampsInRadius
);
// Upload a photo for a Bootcamp
router.put('/:id/photo', bootcampController.bootcampPhotoUpload);

module.exports = router;
