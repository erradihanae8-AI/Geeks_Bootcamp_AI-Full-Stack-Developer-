
import fs from "fs";

// Function to read a file
export function readFile(fileName) {
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("File content:", data);
    });
}

// Function to write to a file
export function writeFile(fileName, content) {
    fs.writeFile(fileName, content, "utf8", (err) => {
        if (err) {
            console.log("Error writing file:", err);
            return;
        }

        console.log("File written successfully!");
    });
}
