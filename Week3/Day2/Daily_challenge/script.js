
const form = document.getElementById("libform");
const story = document.getElementById("story");
const shuffleButton = document.getElementById("shuffle-button");

let words = {};

const stories = [
    (w) => `${w.person} found a ${w.adjective} ${w.noun} in ${w.place} and decided to ${w.verb} all day!`,

    (w) => `Yesterday, ${w.person} took a ${w.adjective} ${w.noun} to ${w.place} to ${w.verb}. Everyone was surprised!`,

    (w) => `In ${w.place}, ${w.person} saw a ${w.noun} so ${w.adjective} that they started to ${w.verb}.`,

    (w) => `Breaking news! ${w.person} went to ${w.place} with a ${w.adjective} ${w.noun} and began to ${w.verb}!`
];

let lastIndex = -1;


function generateStory() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * stories.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    story.textContent = stories[randomIndex](words);
}
form.addEventListener("submit", function(event) {
    event.preventDefault();

    words = {
        noun: document.getElementById("noun").value.trim(),
        adjective: document.getElementById("adjective").value.trim(),
        person: document.getElementById("person").value.trim(),
        verb: document.getElementById("verb").value.trim(),
        place: document.getElementById("place").value.trim()
    };

    
    if (Object.values(words).some(value => value === "")) {
        alert("Please fill in all the fields!");
        return;
    }

    lastIndex = -1;
    generateStory();
});


shuffleButton.addEventListener("click", function() {
    if (Object.keys(words).length === 0) {
        alert("Please generate a story first!");
        return;
    }

    generateStory();
});
