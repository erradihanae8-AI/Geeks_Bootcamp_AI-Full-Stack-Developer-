
const family = {
    father: "Ahmed",
    mother: "Fatima",
    sister: "Sara",
    brother: "Youssef"
};

// 2. Display the keys
for (let key in family) {
    console.log(key);
}

// 3. Display the values
for (let key in family) {
    console.log(family[key]);
}
