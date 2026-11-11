
import persons from "./data.js";

// Function to calculate average age
function calculateAverageAge(persons) {

    // Calculate the total age
    const totalAge = persons.reduce((sum, person) => {
        return sum + person.age;
    }, 0);

    // Calculate the average
    const averageAge = totalAge / persons.length;

    console.log("Average age:", averageAge);
}

// Call the function
calculateAverageAge(persons);
