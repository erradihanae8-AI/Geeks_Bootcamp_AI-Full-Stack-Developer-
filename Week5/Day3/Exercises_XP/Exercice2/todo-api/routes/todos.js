
const express = require("express");
const router = express.Router();

// Sample in-memory database
const todos = [];

let nextId = 1;

// 1. GET: Get all todos
router.get("/", (req, res) => {
    res.json(todos);
});

// 2. POST: Add a new todo
router.post("/", (req, res) => {
    const { title } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).json({
            message: "Title is required"
        });
    }

    const newTodo = {
        id: nextId++,
        title: title.trim(),
        completed: false
    };

    todos.push(newTodo);

    res.status(201).json({
        message: "Todo created successfully",
        todo: newTodo
    });
});

// 3. PUT: Update a todo by ID
router.put("/:id", (req, res) => {
    const id = Number(req.params.id);
    const { title, completed } = req.body;

    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    if (title !== undefined) {
        if (typeof title !== "string" || !title.trim()) {
            return res.status(400).json({
                message: "Title must be a non-empty string"
            });
        }
        todo.title = title.trim();
    }

    if (completed !== undefined) {
        if (typeof completed !== "boolean") {
            return res.status(400).json({
                message: "Completed must be true or false"
            });
        }
        todo.completed = completed;
    }

    res.json({
        message: "Todo updated successfully",
        todo
    });
});

// 4. DELETE: Delete a todo by ID
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = todos.findIndex(todo => todo.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    const deletedTodo = todos.splice(index, 1)[0];

    res.json({
        message: "Todo deleted successfully",
        todo: deletedTodo
    });
});

module.exports = router;
