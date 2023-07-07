// °F = (9/5) °C+32
const convertToCelsius = function(f) {
  return Math.round(10 * ((f - 32) / (9/5))) / 10;
};

const convertToFahrenheit = function(c) {
  return  Math.round(10 * (c * (9/5) + 32)) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
