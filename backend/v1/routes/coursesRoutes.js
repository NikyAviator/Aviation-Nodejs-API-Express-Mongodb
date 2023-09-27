const express = require('express');
const coursesController = require('../../controllers/coursesController');
const router = express.Router({ mergeParams: true });

// Get ALL Courses
router.get('/', coursesController.getCourses);

module.exports = router;
