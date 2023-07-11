const express = require('express');
const bootcampController = require('../../controllers/bootcampController');

const router = express.Router();
// Get all
router.get('/', bootcampController.getAllBootcamps);
// Get ONE bootcamp
router.get('/:id', bootcampController.getOneBootcamp);
// Create a new Bootcamp
router.post('/', bootcampController.createOneBootcamp);
// Update a Bootcamp
router.put('/:id', bootcampController.updateOneBootcamp);
// Delete a Bootcamp
router.delete('/:id', bootcampController.deleteABootcamp);

module.exports = router;
