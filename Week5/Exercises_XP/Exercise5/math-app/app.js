
// Import Lodash
const _ = require("lodash");

// Import custom math module
const math = require("./math");

// Use custom functions
const sum = math.addition(10, 5);
const product = math.multiplication(10, 5);

console.log("Addition:", sum);
console.log("Multiplication:", product);

// Use Lodash utility functions
const numbers = [5, 10, 15, 20, 25];

// Calculate sum using Lodash
const total = _.sum(numbers);

// Calculate average using Lodash
const average = _.mean(numbers);

// Find maximum value
const maximum = _.max(numbers);

// Find minimum value
const minimum = _.min(numbers);

console.log("Numbers:", numbers);
console.log("Total:", total);
console.log("Average:", average);
console.log("Maximum:", maximum);
console.log("Minimum:", minimum);
