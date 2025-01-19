const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Signup Routes
router.get("/signup", authController.getSignupPage);
router.post("/signup", authController.signup);
router.get("/login", authController.getLoginPage);
router.post("/login", authController.login);

module.exports = router;
