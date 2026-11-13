
import { readFile, writeFile } from "./fileManager.js";

// Read Hello World.txt
readFile("Hello World.txt");

// Write inside Bye World.txt
writeFile("Bye World.txt", "Writing to the file");

