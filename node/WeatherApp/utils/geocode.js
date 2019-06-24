const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?limit=2&access_token=pk.eyJ1IjoidGpiMTAxMCIsImEiOiJjang0enhrejQwMTI4M3lwbWpyZHY5bjBmIn0.P3uOr0A1OprYqd_B4CTGpQ';

  request({ url, json: true }, (error, { body }) => {
    const location = body.features;
    if (error) {
      callback('Unable to connect to location services', undefined);
    } else if (location === undefined) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        latitude: location[0].center[1],
        longitude: location[0].center[0],
        location: location[0].place_name
      });
    }
  });
};

module.exports = geocode;
