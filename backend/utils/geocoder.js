const dotenv = require('../config/config');
// The official documentation for node-geocoder is here: https://www.npmjs.com/package/node-geocoder
const NodeGeocoder = require('node-geocoder');
// const config = require('../config/config');
const options = {
  provider: process.env.GEOCODER_PROVIDER,

  // Optional depending on the providers
  //fetch: customFetchImplementation,
  apiKey: process.env.GEOCODER_API_KEY, // for Mapquest, OpenCage, Google Premier
  formatter: null, // 'gpx', 'string', ...
};

console.log(options);
const geocoder = NodeGeocoder(options);

module.exports = geocoder;
