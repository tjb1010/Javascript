const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('Please enter an address');
} else {
  geocode(address, (error, { longitude, latitude, location }) => {
    if (error) {
      return console.log(error);
    }

    forecast(longitude, latitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log('Location: ', location);
      console.log('Forecast: ', forecastData);
    });
  });
}
