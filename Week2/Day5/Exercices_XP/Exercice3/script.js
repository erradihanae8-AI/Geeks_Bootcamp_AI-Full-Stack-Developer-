
let number = prompt("Enter a number:");

while (Number(number) < 10) {
    number = prompt("The number is smaller than 10. Enter a new number:");
}

console.log("Your number is:", number);
