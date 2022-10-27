const express = require("express");
const router = express.Router();
// Import controller methods
const {
  loginUser,
  getAllUsers,
  register,
  updateProfile,
} = require("../controllers/UserController");

router.post("/login", loginUser);
router.get("/users", getAllUsers);
router.post("/register", register);
router.post("/updateProfile", updateProfile);

module.exports = router;
