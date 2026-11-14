
const express = require("express");
const path = require("path");

const {
    generateQuestion,
    checkAnswer
} = require("./modules/game");

const {
    updateScore,
    getLeaderboard
} = require("./modules/leaderboard");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//  GET 
app.get("/api/question", (req, res) => {
    const question = generateQuestion();

    res.json(question);
});

//  POST
app.post("/api/guess", (req, res) => {
    const { player, guess, questionId } = req.body;

    if (!player || !guess || !questionId) {
        return res.status(400).json({
            message: "Missing information"
        });
    }

    const result = checkAnswer(questionId, guess);

    if (!result) {
        return res.status(400).json({
            message: "Invalid question"
        });
    }

    const score = updateScore(player, result.correct);

    res.json({
        correct: result.correct,
        correctAnswer: result.correctAnswer,
        score,
        message: result.correct
            ? "Correct! Well done! "
            : "Wrong answer! Try again! "
    });
});

//  GET 
app.get("/api/leaderboard", (req, res) => {
    res.json(getLeaderboard());
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});