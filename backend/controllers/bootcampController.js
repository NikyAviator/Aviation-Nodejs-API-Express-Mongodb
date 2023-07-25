const Bootcamp = require('../models/Bootcamp');
const bootcampService = require('../services/bootcampService');

//@desc     Get ALL bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
const getAllBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

//@desc     Get ONE bootcamp
//@route    GET /api/v1/bootcamps/:id
//@access   Public
const getOneBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({
        success: false,
        msg: `No bootcamp found with id: ${req.params.id}`,
      });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

//@desc     Create a new bootcamp
//@route    POST /api/v1/bootcamps
//@access   Private
const createOneBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

//@desc     Update a bootcamp
//@route    PUT /api/v1/bootcamps/:id
//@access   Private
const updateOneBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};
//@desc     Delete a bootcamp
//@route    DELETE /api/v1/bootcamps/:id
//@access   Private
const deleteABootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

module.exports = {
  getAllBootcamps,
  createOneBootcamp,
  getOneBootcamp,
  updateOneBootcamp,
  deleteABootcamp,
};
