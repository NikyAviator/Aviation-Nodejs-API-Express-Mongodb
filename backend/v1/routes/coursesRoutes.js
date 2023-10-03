const express = require('express');
const coursesController = require('../../controllers/coursesController');
const router = express.Router({ mergeParams: true });

// FRÅN bootcampRoutes.js:
// Re-route into other resource routers
//router.use('/:bootcampId/courses', courseRouter); <- kommer innan våra routes

// Get ALL Courses
router.get('/', coursesController.getCourses);

// Get ONE Course
router.get('/:id', coursesController.getCourse);

// Add a Course
router.post('/', coursesController.addCourse);

// Update a Course
router.put('/:id', coursesController.updateCourse);

// Delete a Course
router.delete('/:id', coursesController.deleteCourse);
module.exports = router;
