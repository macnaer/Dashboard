const express = require("express");
const router = express.Router();
// Import controller methods
const { loginUser, getAllUsers } = require("../controllers/UserController");

router.post("/login", loginUser);
router.get("/users", getAllUsers);

module.exports = router;
