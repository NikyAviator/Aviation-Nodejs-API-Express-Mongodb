// const nodeGeocoder = require('node-geocoder');

// const options = {
//   provider: process.env.GEOCODER_PROVIDER,

//   // Optional depending on the providers
//   httpAdapter: 'https',
//   apiKey: process.env.GEOCODER_API_KEY,
//   formatter: null,
// };

// console.log(options);
// const geocoder = nodeGeocoder(options);

// module.exports = geocoder;

// The official documentation for node-geocoder is here: https://www.npmjs.com/package/node-geocoder
const NodeGeocoder = require('node-geocoder');
// const config = require('../config/config');
const options = {
  provider: 'mapquest',

  // Optional depending on the providers
  //fetch: customFetchImplementation,
  apiKey: 'dibbledabble', // for Mapquest, OpenCage, Google Premier
  formatter: null, // 'gpx', 'string', ...
};

console.log(options);
const geocoder = NodeGeocoder(options);

module.exports = geocoder;
