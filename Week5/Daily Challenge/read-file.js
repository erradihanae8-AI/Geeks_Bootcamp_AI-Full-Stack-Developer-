
const fs = require("fs");
const path = require("path");

function readFile() {
    const filePath = path.join(__dirname, "files", "file-data.txt");

    try {
        const content = fs.readFileSync(filePath, "utf8");
        console.log(content);
    } catch (error) {
        console.log("Error reading file:", error.message);
    }
}

module.exports = readFile;
