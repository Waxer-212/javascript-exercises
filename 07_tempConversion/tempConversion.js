const convertToCelsius = function(temperature) {
    temperature = Math.round((temperature - 32) / 1.8 * 10) / 10;
    return temperature;
};

const convertToFahrenheit = function(temperature) {
    temperature = Math.round((temperature * 1.8 + 32) * 10) / 10;
    return temperature; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
