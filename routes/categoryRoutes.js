const express = require("express");
const router = express.Router();
// Import controller methods
const { getAllCategories } = require("../controllers/CategoryController");

router.get("/allCategories", getAllCategories);

module.exports = router;
