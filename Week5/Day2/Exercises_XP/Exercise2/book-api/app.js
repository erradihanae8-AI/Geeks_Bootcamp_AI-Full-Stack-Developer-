
const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

// 1. Simulated database
let books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        publishedYear: 1988
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert C. Martin",
        publishedYear: 2008
    },
    {
        id: 3,
        title: "Atomic Habits",
        author: "James Clear",
        publishedYear: 2018
    }
];

// 2. GET - Read all books
app.get("/api/books", (req, res) => {
    res.status(200).json(books);
});

// 3. GET - Read one book
app.get("/api/books/:bookId", (req, res) => {
    const bookId = Number(req.params.bookId);

    const book = books.find(book => book.id === bookId);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.status(200).json(book);
});

// 4. POST - Create a book
app.post("/api/books", (req, res) => {
    const { title, author, publishedYear } = req.body;

    if (!title || !author || publishedYear == null) {
        return res.status(400).json({
            message: "Title, author and publishedYear are required"
        });
    }

    const newBook = {
        id: books.length > 0
            ? Math.max(...books.map(book => book.id)) + 1
            : 1,
        title,
        author,
        publishedYear
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book created successfully",
        book: newBook
    });
});

// 5. PUT - Update a book
app.put("/api/books/:bookId", (req, res) => {
    const bookId = Number(req.params.bookId);

    const book = books.find(book => book.id === bookId);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const { title, author, publishedYear } = req.body;

    if (!title || !author || publishedYear == null) {
        return res.status(400).json({
            message: "Title, author and publishedYear are required"
        });
    }

    book.title = title;
    book.author = author;
    book.publishedYear = publishedYear;

    res.status(200).json({
        message: "Book updated successfully",
        book
    });
});

// 6. DELETE - Delete a book
app.delete("/api/books/:bookId", (req, res) => {
    const bookId = Number(req.params.bookId);

    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const deletedBook = books.splice(bookIndex, 1)[0];

    res.status(200).json({
        message: "Book deleted successfully",
        book: deletedBook
    });
});

// 7. Invalid routes
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// 8. Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        message: "Internal Server Error"
    });
});

// 9. Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});