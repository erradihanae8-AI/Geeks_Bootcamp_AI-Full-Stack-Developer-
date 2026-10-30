
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`;


// 1. Convert JSON string to JavaScript object
function toJs() {
    return new Promise((resolve, reject) => {

        const morseJS = JSON.parse(morse);

        if (Object.keys(morseJS).length === 0) {
            reject("Error: Morse object is empty!");
        } else {
            resolve(morseJS);
        }

    });
}


// 2. Convert user input to Morse code
function toMorse(morseJS) {
    return new Promise((resolve, reject) => {

        const userInput = prompt("Enter a word or a sentence:");

        if (!userInput || userInput.trim() === "") {
            reject("Error: Please enter a word!");
            return;
        }

        const text = userInput.toLowerCase();

        const morseTranslation = [];

        for (let char of text) {

            if (char === " ") {
                morseTranslation.push("");
            }
            else if (Object.prototype.hasOwnProperty.call(morseJS, char)) {
                morseTranslation.push(morseJS[char]);
            }
            else {
                reject(`Error: The character "${char}" doesn't exist!`);
                return;
            }

        }

        resolve(morseTranslation);

    });
}


// 3. Join Morse codes and display them in the DOM
function joinWords(morseTranslation) {

    const result = morseTranslation.join("\n");

    document.getElementById("result").textContent = result;

}


// 4. Promise chaining
toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => {
        document.getElementById("result").textContent = error;
        console.log(error);
    });
