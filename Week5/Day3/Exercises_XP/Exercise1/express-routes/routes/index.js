
const express = require("express");

const router = express.Router();

// Homepage
router.get("/", (req, res) => {
    res.send("Welcome to the Homepage!");
});

// About page
router.get("/about", (req, res) => {
    res.send("Welcome to the About Us page!");
});

module.exports = router;