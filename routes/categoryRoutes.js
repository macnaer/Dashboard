const express = require("express");
const router = express.Router();
// Import controller methods
const {
  getAllCategories,
  updateCategory,
} = require("../controllers/CategoryController");

router.get("/allCategories", getAllCategories);
router.post("/updateCategory", updateCategory);

module.exports = router;
