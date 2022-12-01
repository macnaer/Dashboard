const express = require("express");
const router = express.Router();
// Import controller methods
const { createPost } = require("../controllers/PostController");

router.post("/createPost", createPost);

module.exports = router;
