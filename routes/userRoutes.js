const express = require("express");
const router = express.Router();
// Import controller methods
const { loginUser } = require("../controllers/UserController");

router.post("/login", loginUser);

module.exports = router;
