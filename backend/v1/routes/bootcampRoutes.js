const express = require('express');
const bootcampController = require('../../controllers/bootcampController');

const router = express.Router();
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

module.exports = router;
