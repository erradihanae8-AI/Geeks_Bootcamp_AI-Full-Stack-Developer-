
const greet = require("./greeting");
const displayMessage = require("./colorful-message");
const readFile = require("./read-file");

console.log("================================");
console.log("       DAILY CHALLENGE");
console.log("================================");

// Task 1: Greeting
console.log("\n--- Greeting ---");
console.log(greet("Hanae"));

// Task 2: Colorful Message
console.log("\n--- Colorful Message ---");
displayMessage();

// Task 3: Read File
console.log("\n--- File Content ---");
readFile();

console.log("\n===== CHALLENGE COMPLETED! =====");
