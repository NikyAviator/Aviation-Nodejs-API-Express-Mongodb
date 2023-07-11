const express = require('express');
const dotenv = require('dotenv');

const v1BootcampRouter = require('./v1/routes/bootcampRoutes');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 5000;
// Mounting routers
app.use('/api/v1/bootcamps', v1BootcampRouter);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
);
