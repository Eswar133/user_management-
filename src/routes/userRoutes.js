const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/authMiddleware");
const userController = require("../controllers/userController");

// Dashboard Route
router.get("/dashboard", verifyToken, userController.getDashboard);

// Update User Details
router.post("/update", verifyToken, userController.updateUser);

// Deactivate Account
router.post("/deactivate", verifyToken, userController.deactivateAccount);

module.exports = router;
