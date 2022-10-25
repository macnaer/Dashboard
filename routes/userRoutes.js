const express = require("express");
const router = express.Router();
// Import controller methods
const {
  loginUser,
  getAllUsers,
  register,
} = require("../controllers/UserController");

router.post("/login", loginUser);
router.get("/users", getAllUsers);
router.post("/register", register);

module.exports = router;
