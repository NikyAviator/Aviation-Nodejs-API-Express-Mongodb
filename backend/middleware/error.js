const ErrorResponse = require('../utils/errorResponse');

const errorHandlers = (err, req, res, next) => {
  // Copy err object
  let error = { ...err };
  // sets the error message to the error object
  error.message = err.message;
  console.log(err.stack.red);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || 'Server Error' });
};

module.exports = errorHandlers;
