
const express = require("express");
const router = express.Router();

// Trivia questions
const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale"
    }
];

// Game state
let currentQuestionIndex = 0;
let score = 0;
let quizStarted = false;

// GET /quiz - Start the quiz
router.get("/", (req, res) => {
    
    currentQuestionIndex = 0;
    score = 0;
    quizStarted = true;

    res.json({
        message: "Welcome to the Trivia Quiz!",
        questionNumber: 1,
        totalQuestions: triviaQuestions.length,
        question: triviaQuestions[currentQuestionIndex].question
    });
});

// POST /quiz - Submit an answer
router.post("/", (req, res) => {
    if (!quizStarted) {
        return res.status(400).json({
            message: "Please start the quiz first using GET /quiz"
        });
    }

    if (currentQuestionIndex >= triviaQuestions.length) {
        return res.status(400).json({
            message: "Quiz is already finished. Check GET /quiz/score"
        });
    }

    const { answer } = req.body;

    if (typeof answer !== "string" || !answer.trim()) {
        return res.status(400).json({
            message: "Please provide an answer"
        });
    }

    const currentQuestion = triviaQuestions[currentQuestionIndex];

    // Check the answer
    const isCorrect =
        answer.trim().toLowerCase() ===
        currentQuestion.answer.toLowerCase();

    if (isCorrect) {
        score++;
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if the quiz is finished
    if (currentQuestionIndex >= triviaQuestions.length) {
        return res.json({
            feedback: isCorrect
                ? "Correct answer!"
                : `Incorrect! The correct answer is ${currentQuestion.answer}`,
            quizFinished: true,
            message: "Quiz completed! Check your final score at GET /quiz/score"
        });
    }

    res.json({
        feedback: isCorrect
            ? "Correct answer!"
            : `Incorrect! The correct answer is ${currentQuestion.answer}`,
        quizFinished: false,
        questionNumber: currentQuestionIndex + 1,
        question: triviaQuestions[currentQuestionIndex].question
    });
});

// GET /quiz/score - Get the final score
router.get("/score", (req, res) => {
    if (!quizStarted) {
        return res.status(400).json({
            message: "Please start the quiz first"
        });
    }

    if (currentQuestionIndex < triviaQuestions.length) {
        return res.json({
            message: "The quiz is not finished yet",
            currentScore: score,
            answeredQuestions: currentQuestionIndex,
            totalQuestions: triviaQuestions.length
        });
    }

    res.json({
        message: "Your quiz is finished!",
        finalScore: score,
        totalQuestions: triviaQuestions.length,
        result: `${score}/${triviaQuestions.length}`
    });
});

module.exports = router;