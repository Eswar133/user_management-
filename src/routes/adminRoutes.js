const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { verifyToken } = require("../middlewares/authMiddleware");

// Admin Login
router.get("/login", (req, res) => res.render("auth/adminLogin"));
router.post("/login", adminController.adminLogin);

// Admin Dashboard
router.get("/dashboard", verifyToken, adminController.getAdminDashboard);

// Deactivate User
router.post("/deactivate", verifyToken, adminController.deactivateUser);

module.exports = router;
