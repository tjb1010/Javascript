const request = require('request');

const url =
  'https://api.darksky.net/forecast/cd3b89b389da08dc0e310aee04218c9c/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to the weather service');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    const current = response.body.currently;
    const today = response.body.daily.data[0];

    console.log(
      `${today.summary} It is currently ${
        current.temperature
      } degrees outside. There is a ${
        current.precipProbability
      }% chance of rain. High of ${today.temperatureMax} degrees // Min of ${
        today.temperatureMin
      } degrees`
    );
  }
});

const geoUrl =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/tulsa.json?limit=2&access_token=pk.eyJ1IjoidGpiMTAxMCIsImEiOiJjang0enhrejQwMTI4M3lwbWpyZHY5bjBmIn0.P3uOr0A1OprYqd_B4CTGpQ';

request({ url: geoUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location services');
  } else if (response.body.features === undefined) {
    console.log('Unable to find location');
  } else {
    const lat = response.body.features[0].center[1];
    const long = response.body.features[0].center[0];
    console.log(lat, long);
  }
});
