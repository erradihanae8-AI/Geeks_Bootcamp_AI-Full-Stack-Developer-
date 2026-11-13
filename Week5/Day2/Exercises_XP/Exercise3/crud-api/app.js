
const express = require("express");

// Import fetchPosts from dataService
const { fetchPosts } = require("./data/dataService");

const app = express();
const PORT = 5000;

// GET /posts - Retrieve posts from JSONPlaceholder
app.get("/posts", async (req, res) => {
    try {
        const posts = await fetchPosts();

        console.log("Posts successfully retrieved and sent!");

        res.status(200).json(posts);

    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({
            message: "Failed to retrieve posts"
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});