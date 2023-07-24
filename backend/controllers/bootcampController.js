const Bootcamp = require('../models/Bootcamp');

//@desc     Get ALL bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
const getAllBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ status: 'OK', msg: 'Display all bootcamps', hello: req.hello });
};

//@desc     Get ONE bootcamp
//@route    GET /api/v1/bootcamps/:id
//@access   Public
const getOneBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ status: 'OK', msg: `Display bootcamp: ${req.params.id}` });
};

//@desc     Create a new bootcamp
//@route    POST /api/v1/bootcamps
//@access   Private
const createOneBootcamp = (req, res, next) => {
  res.status(201).json({ status: 'OK', msg: 'Create a new bootcamp' });
};

//@desc     Update a bootcamp
//@route    PUT /api/v1/bootcamps/:id
//@access   Private
const updateOneBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ status: 'OK', msg: `Updated bootcamp: ${req.params.id}` });
};
//@desc     Delete a bootcamp
//@route    DELETE /api/v1/bootcamps/:id
//@access   Private
const deleteABootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ status: 'OK', msg: `Deleted bootcamp: ${req.params.id}` });
};

module.exports = {
  getAllBootcamps,
  createOneBootcamp,
  getOneBootcamp,
  updateOneBootcamp,
  deleteABootcamp,
};
