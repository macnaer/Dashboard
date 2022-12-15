const express = require("express");
const router = express.Router();
// Import controller methods
const {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  updatePost,
} = require("../controllers/PostController");

router.post("/createPost", createPost);
router.get("/getAllPosts", getAllPosts);
router.get("/getPostById", getPostById);
router.delete("/deletePost", deletePost);
router.post("/updatePost", updatePost);

module.exports = router;
