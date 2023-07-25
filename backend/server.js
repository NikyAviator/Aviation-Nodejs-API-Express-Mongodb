const express = require('express');
const dotenv = require('dotenv');
const v1BootcampRouter = require('./v1/routes/bootcampRoutes');
const morgan = require('morgan');
const connectDB = require('./config/db');
// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mounting routers
app.use('/api/v1/bootcamps', v1BootcampRouter);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Unhandled Rejection (Error): ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
