const nodeGeocoder = require('node-geocoder');

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  // Optional depending on the providers
  httpAdapter: 'https',
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null,
};

console.log(options);
const geocoder = nodeGeocoder(options);

module.exports = geocoder;
