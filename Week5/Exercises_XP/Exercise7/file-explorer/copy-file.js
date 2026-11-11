
const fs = require("fs");

// Read the content of source.txt
fs.readFile("source.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading the file:", err);
        return;
    }

    // Write the same content into destination.txt
    fs.writeFile("destination.txt", data, (err) => {
        if (err) {
            console.log("Error writing the file:", err);
            return;
        }

        console.log("File copied successfully!");
    });
});
