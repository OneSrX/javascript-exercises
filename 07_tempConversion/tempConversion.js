const convertToCelsius = function (temp) {
  const CELSIUS_FORMULA = ((temp - 32) * 5) / 9;

  return parseFloat(CELSIUS_FORMULA.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  const FAHRENHEIT_FORMULA = (temp * 9) / 5 + 32;

  return parseFloat(FAHRENHEIT_FORMULA.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
