
const emojis = require("../data/emojis");

// Store active questions
const activeQuestions = {};

// Shuffle a table
function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

// Generate a question
function generateQuestion() {
    const randomIndex = Math.floor(
        Math.random() * emojis.length
    );

    const correctEmoji = emojis[randomIndex];

    const wrongOptions = shuffle(
        emojis.filter(item => item.name !== correctEmoji.name)
    ).slice(0, 3);

    const options = shuffle([
        correctEmoji,
        ...wrongOptions
    ]).map(item => item.name);

    const questionId = Date.now().toString() +
        Math.random().toString(36).slice(2);

    activeQuestions[questionId] = correctEmoji.name;

    return {
        questionId,
        emoji: correctEmoji.emoji,
        options
    };
}

// Check an answer
function checkAnswer(questionId, guess) {
    const correctAnswer = activeQuestions[questionId];

    if (!correctAnswer) {
        return null;
    }

   
    delete activeQuestions[questionId];

    return {
        correct: guess === correctAnswer,
        correctAnswer
    };
}

module.exports = {
    generateQuestion,
    checkAnswer
};
