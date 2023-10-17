const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  sendTokenResponse(user, 200, res);
});

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return next(
      new ErrorResponse('Please provide an email and password.', 400)
    );
  }

  // Check for user
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid credentials.', 401));
  }

  // Check if password matches
  const isMatch = await user.matchUserPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials.', 401));
  }

  sendTokenResponse(user, 200, res);
});

// @desc      Get current logged in user
// @route     GET /api/v1/auth/me
// @access    Private
const getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({ success: true, data: user });
});

// @desc      Forgot current password
// @route     POST /api/v1/auth/forgotpassword
// @access    Public
const forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  // check for that user
  if (!user) {
    return next(new ErrorResponse('There is no user with that email', 404));
  }

  // Get a reset token
  const resetToken = user.getResetPasswordToken();
  console.log(resetToken);

  await user.save({ validateBeforeSave: false });

  res.status(200).json({ success: true, data: user });
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statuscode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // 30 days
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true; // Cookie will only be sent on https
  }
  res.status(statuscode).cookie('token', token, options).json({
    success: true,
    token,
  });
};

module.exports = { registerUser, login, getMe, forgotPassword };
