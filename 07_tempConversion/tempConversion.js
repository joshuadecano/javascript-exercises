const convertToCelsius = function(temp) {
  celc = (temp - 32) * (5/9);
  var rounded = Math.round(celc * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(temp) {
  fahr = (temp * 9/5)+(32);
  var rounded = Math.round(fahr * 10) / 10;
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
