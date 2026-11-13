
const chalk = require("chalk");

function displayMessage() {
    console.log(chalk.green("Welcome to my Daily Challenge!"));
    console.log(chalk.blue("I am learning Node.js modules."));
    console.log(chalk.yellow.bold("Keep learning and keep coding!"));
}

module.exports = displayMessage;
