const express = require("express");
const router = express.Router();
// Import controller methods
const {
  loginUser,
  getAllUsers,
  register,
  updateProfile,
  updateUser,
  updatePassword,
  getUserById,
  getUserByEmail,
  deleteUserById,
} = require("../controllers/UserController");

router.post("/login", loginUser);
router.get("/users", getAllUsers);
router.post("/register", register);
router.post("/updateProfile", updateProfile);
router.post("/updateUser", updateUser);
router.post("/changePassword", updatePassword);
router.get("/getUserById", getUserById);
router.get("/getUserByEmail", getUserByEmail);
router.delete("/deleteUserById", deleteUserById);

module.exports = router;
