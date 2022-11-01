const express = require("express");
const router = express.Router();
// Import controller methods
const {
  loginUser,
  getAllUsers,
  register,
  updateProfile,
  updatePassword,
} = require("../controllers/UserController");

router.post("/login", loginUser);
router.get("/users", getAllUsers);
router.post("/register", register);
router.post("/updateProfile", updateProfile);
router.post("/changePassword", updatePassword);

module.exports = router;
