const express = require('express');
const dotenv = require('dotenv');
const v1BootcampRouter = require('./v1/routes/bootcampRoutes');
const morgan = require('morgan');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mounting routers
app.use('/api/v1/bootcamps', v1BootcampRouter);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
);
