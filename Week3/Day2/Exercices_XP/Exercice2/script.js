
const form = document.querySelector("form");

// 1. Retrieve the form and console.log it
console.log(form);

// 2. Retrieve inputs by their id
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");

console.log(firstName);
console.log(lastName);

// 3. Retrieve inputs by their name attribute
const firstNameByName = document.getElementsByName("firstname");
const lastNameByName = document.getElementsByName("lastname");

console.log(firstNameByName);
console.log(lastNameByName);

// 4. Handle form submission
form.addEventListener("submit", function(event) {

    // Prevent the page from reloading
    event.preventDefault();

    // Get input values
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();

    // Make sure inputs are not empty
    if (firstNameValue === "" || lastNameValue === "") {
        alert("Please fill in both fields!");
        return;
    }

    // Retrieve the ul
    const usersAnswer = document.querySelector(".usersAnswer");

    // Create an li for the first name
    const firstLi = document.createElement("li");
    firstLi.textContent = firstNameValue;

    // Create an li for the last name
    const lastLi = document.createElement("li");
    lastLi.textContent = lastNameValue;

    // Append li elements to the ul
    usersAnswer.appendChild(firstLi);
    usersAnswer.appendChild(lastLi);

    // Clear the inputs
    firstName.value = "";
    lastName.value = "";
});
