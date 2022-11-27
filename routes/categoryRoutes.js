const express = require("express");
const router = express.Router();
// Import controller methods
const { getAllCategories } = require("../controllers/CategoryController");

router.get("/allCategories", getAllCategories);
router.post("/updateCategory", (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
