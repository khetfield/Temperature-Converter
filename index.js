// @param {string} fahren temperature in degrees F
// @returns {number} the number of degrees C

function convertToCelsius(fahren) {
  return (parseFloat(fahren) - 32) * (5 / 9);
}

//  @param {number} fahren
//  @param {number} celc

function createMessage(fahren, celc) {
  let feel;
  if (parseFloat(fahren) < 32) {
    feel = "very cold";
  } else if (parseFloat(fahren) < 64) {
    feel = "cold";
  } else if (parseFloat(fahren) < 86) {
    feel = "warm";
  } else if (parseFloat(fahren) < 100) {
    feel = "hot";
  }
  return `The temperature ${fahren}F (${celc}C) feels ${feel}.`;
}

//  @param {number} limit
//  @returns {number}
 
function rand(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
