
const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON data from requests
app.use(express.json());


// Simulated database
let data = [
    {
        id: 1,
        title: "Introduction to Node.js",
        content: "Node.js is a JavaScript runtime environment."
    },
    {
        id: 2,
        title: "Learning Express.js",
        content: "Express.js is a web framework for Node.js."
    },
    {
        id: 3,
        title: "REST API Basics",
        content: "REST APIs allow applications to communicate."
    }
];

// GET /posts - Get all blog posts
app.get("/posts", (req, res) => {
    res.status(200).json(data);
});

// GET /posts/:id - Get one blog post
app.get("/posts/:id", (req, res) => {
    const id = Number(req.params.id);

    const post = data.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    res.status(200).json(post);
});

// POST /posts - Create a new blog post
app.post("/posts", (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title and content are required"
        });
    }

    const newPost = {
        id: data.length > 0
            ? Math.max(...data.map(post => post.id)) + 1
            : 1,
        title,
        content
    };

    data.push(newPost);

    res.status(201).json({
        message: "Post created successfully",
        post: newPost
    });
});

// PUT /posts/:id - Update an existing post
app.put("/posts/:id", (req, res) => {
    const id = Number(req.params.id);

    const post = data.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title and content are required"
        });
    }

    post.title = title;
    post.content = content;

    res.status(200).json({
        message: "Post updated successfully",
        post
    });
});

// DELETE /posts/:id - Delete a post
app.delete("/posts/:id", (req, res) => {
    const id = Number(req.params.id);

    const postIndex = data.findIndex(post => post.id === id);

    if (postIndex === -1) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    const deletedPost = data.splice(postIndex, 1)[0];

    res.status(200).json({
        message: "Post deleted successfully",
        post: deletedPost
    });
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        message: "Internal Server Error"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
