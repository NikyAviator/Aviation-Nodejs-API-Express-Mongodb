// Load env vars
// dotenv.config({ path: '../config/config.env' });

// The official documentation for node - geocoder is here: https://www.npmjs.com/package/node-geocoder
const NodeGeocoder = require('node-geocoder');
// const config = require('../config/config');
const options = {
  provider: 'mapquest',

  // Optional depending on the providers
  //fetch: customFetchImplementation,
  apiKey: 'ppc', // for Mapquest, OpenCage, Google Premier
  formatter: null, // 'gpx', 'string', ...
};

console.log(options);
const geocoder = NodeGeocoder(options);

module.exports = geocoder;
