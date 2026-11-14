
const express = require("express");

const app = express();

app.use(express.json());

// Import books router
const booksRouter = require("./routes/books");

app.use("/books", booksRouter);

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});