
const express = require("express");
const app = express();


app.use(express.json());

const quizRouter = require("./routes/quiz");

app.use("/quiz", quizRouter);

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});