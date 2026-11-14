
const playerName = document.getElementById("playerName");
const startBtn = document.getElementById("startBtn");

const game = document.getElementById("game");
const emojiElement = document.getElementById("emoji");
const optionsElement = document.getElementById("options");

const guessForm = document.getElementById("guessForm");
const feedback = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

const leaderboardElement =
    document.getElementById("leaderboard");

let currentPlayer = "";
let currentQuestionId = "";

// Start the game
startBtn.addEventListener("click", async () => {

    currentPlayer = playerName.value.trim();

    if (!currentPlayer) {
        alert("Please enter your name!");
        return;
    }

    game.hidden = false;
    startBtn.disabled = true;
    playerName.disabled = true;

    scoreElement.textContent = "0";

    await loadQuestion();
    await loadLeaderboard();
});

// Upload a question
async function loadQuestion() {

    feedback.textContent = "";
    nextBtn.hidden = true;

    const response = await fetch("/api/question");
    const data = await response.json();

    if (!response.ok) {
        feedback.textContent = "Error loading question";
        return;
    }

    currentQuestionId = data.questionId;
    emojiElement.textContent = data.emoji;

    optionsElement.innerHTML = "";

    data.options.forEach(option => {

        const label = document.createElement("label");
        label.className = "option";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "guess";
        radio.value = option;
        radio.required = true;

        label.appendChild(radio);
        label.appendChild(
            document.createTextNode(option)
        );

        optionsElement.appendChild(label);
    });
}

// Send the response to the server
guessForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const selected = document.querySelector(
        'input[name="guess"]:checked'
    );

    if (!selected) return;

    const response = await fetch("/api/guess", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            player: currentPlayer,
            guess: selected.value,
            questionId: currentQuestionId
        })
    });

    const data = await response.json();

    if (!response.ok) {
        feedback.textContent = data.message;
        return;
    }

    feedback.textContent = data.message;

    feedback.style.color =
        data.correct ? "green" : "red";

    scoreElement.textContent = data.score;

    // Disable choices
    document.querySelectorAll(
        'input[name="guess"]'
    ).forEach(input => {
        input.disabled = true;
    });

    nextBtn.hidden = false;

    await loadLeaderboard();
});

// Next question
nextBtn.addEventListener("click", loadQuestion);

// Update the leaderboard
async function loadLeaderboard() {

    const response = await fetch("/api/leaderboard");
    const data = await response.json();

    leaderboardElement.innerHTML = "";

    data.forEach(item => {

        const li = document.createElement("li");

        li.textContent =
            `${item.player} - ${item.score} points`;

        leaderboardElement.appendChild(li);
    });
}