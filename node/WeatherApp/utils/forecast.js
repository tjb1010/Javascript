const request = require('request');

const forecast = (long, lat, callback) => {
  const url = `https://api.darksky.net/forecast/cd3b89b389da08dc0e310aee04218c9c/${lat},${long}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to the weather service', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      const current = body.currently;
      const today = body.daily.data[0];

      callback(
        undefined,
        `${today.summary} It is currently ${Math.round(
          current.temperature
        )} degrees outside. There is a ${Math.round(
          current.precipProbability
        )}% chance of rain. High of ${Math.round(
          today.temperatureMax
        )} degrees // Min of ${Math.round(today.temperatureMin)} degrees`
      );
    }
  });
};

module.exports = forecast;
