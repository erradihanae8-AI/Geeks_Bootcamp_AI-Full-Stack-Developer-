
const planets = [
    {
        name: "Mercury",
        color: "gray",
        moons: 0
    },
    {
        name: "Venus",
        color: "orange",
        moons: 0
    },
    {
        name: "Earth",
        color: "blue",
        moons: 1
    },
    {
        name: "Mars",
        color: "red",
        moons: 2
    },
    {
        name: "Jupiter",
        color: "burlywood",
        moons: 95
    },
    {
        name: "Saturn",
        color: "gold",
        moons: 274
    },
    {
        name: "Uranus",
        color: "lightblue",
        moons: 29
    },
    {
        name: "Neptune",
        color: "darkblue",
        moons: 16
    }
];

// Select the section
const section = document.querySelector(".listPlanets");

// Loop through each planet
planets.forEach(function(planet) {

    // Create a div for the planet
    const planetDiv = document.createElement("div");

    // Add the planet class
    planetDiv.classList.add("planet");

    // Add a different background color
    planetDiv.style.backgroundColor = planet.color;

    // Display the planet name
    planetDiv.textContent = planet.name;

    // Add some space between planets
    planetDiv.style.display = "inline-block";
    planetDiv.style.margin = "20px";

    // Create the moons
    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div");

        moonDiv.classList.add("moon");

        // Position the moons around the planet
        moonDiv.style.top = `${-10 + i * 5}px`;
        moonDiv.style.left = `${100 + i * 5}px`;

        planetDiv.appendChild(moonDiv);
    }

    // Add the planet to the section
    section.appendChild(planetDiv);
});
