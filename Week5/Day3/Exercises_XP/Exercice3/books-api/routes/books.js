
const express = require("express");
const router = express.Router();


const books = [];

let nextId = 1;

// GET
router.get("/", (req, res) => {
    res.json(books);
});

// POST
router.post("/", (req, res) => {
    const { title, author, year } = req.body;

    if (!title || !author || year === undefined) {
        return res.status(400).json({
            message: "Title, author and year are required"
        });
    }

    const newBook = {
        id: nextId++,
        title,
        author,
        year
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });
});

// PUT
router.put("/:id", (req, res) => {
    const id = Number(req.params.id);

    const { title, author, year } = req.body;

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    if (title !== undefined) book.title = title;
    if (author !== undefined) book.author = author;
    if (year !== undefined) book.year = year;

    res.json({
        message: "Book updated successfully",
        book
    });
});

// DELETE
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const deletedBook = books.splice(index, 1)[0];

    res.json({
        message: "Book deleted successfully",
        book: deletedBook
    });
});

module.exports = router;
