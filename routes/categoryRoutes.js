const express = require("express");
const router = express.Router();
// Import controller methods
const {
  getAllCategories,
  updateCategory,
  deleteCategory,
  getCategoryById,
} = require("../controllers/CategoryController");

router.get("/allCategories", getAllCategories);
router.post("/updateCategory", updateCategory);
router.delete("/deleteCategory", deleteCategory);
router.get("/getCategoryById", getCategoryById);

module.exports = router;
