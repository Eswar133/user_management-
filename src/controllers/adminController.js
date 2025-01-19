const Admin = require("../models/adminModel");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Render Super Admin Dashboard
exports.getAdminDashboard = async (req, res) => {
  try {
    const users = await User.find();
    res.render("superAdmin", { users });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error loading admin dashboard.");
  }
};

// Super Admin Login
exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).send("Invalid credentials.");
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).send("Invalid credentials.");
    }

    // Generate JWT token
    const token = jwt.sign({ id: admin._id, role: "admin" }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Set token in cookie
    res.cookie("token", token, { httpOnly: true });

    res.redirect("/admin/dashboard");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error during admin login.");
  }
};

// Deactivate User
exports.deactivateUser = async (req, res) => {
  try {
    const { userId } = req.body;
    await User.findByIdAndUpdate(userId, { isActive: false });
    res.redirect("/admin/dashboard");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deactivating user.");
  }
};
