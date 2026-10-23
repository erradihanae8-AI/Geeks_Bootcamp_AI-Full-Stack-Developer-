
const people = ["Greg", "Mary", "Devon", "James"];

// 1. Remove "Greg"
people.splice(0, 1);
console.log(people);

// 2. Replace "James" with "Jason"
people[2] = "Jason";
console.log(people);

// 3. Add my name at the end
people.push("Hanae");
console.log(people);

// 4. Display Mary's index
console.log(people.indexOf("Mary"));

// 5. Copy the array without Mary or Hanae
const newPeople = people.slice(1, 3);
console.log(newPeople);

// 6. Find the index of "Foo"
console.log(people.indexOf("Foo"));

// 7. Get the last element
const last = people[people.length - 1];
console.log(last);

// Part 2 -Loops
const people2 = ["Mary", "Devon", "Jason", "Hanae"];

// 1. Display every person
for (let i = 0; i < people2.length; i++) {
    console.log(people2[i]);
}

// 2. Stop after displaying Devon
for (let i = 0; i < people2.length; i++) {
    console.log(people2[i]);

    if (people2[i] === "Devon") {
        break;
    }
}

