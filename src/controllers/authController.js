const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getSignupPage = (req, res) => {
  res.render("auth/signup");
};


exports.getLoginPage = (req, res) => {
    res.render("auth/login");
  };


exports.signup = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already registered with this email.");
    }

    // Create a new user
    const user = new User({ name, email, password, phone });
    await user.save();

    res.redirect("/auth/login");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating your account.");
  }
};


exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send("User not found. Please sign up first.");
      }
  
      // Check if user is active
      if (!user.isActive) {
        return res.status(403).send("Your account is deactivated. Please contact support.");
      }
  
      // Verify password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).send("Invalid email or password.");
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      // Set token in a cookie
      res.cookie("token", token, { httpOnly: true });
  
      // Redirect based on role
      if (user.role === "admin") {
        return res.redirect("/admin/dashboard");
      }
      res.redirect("/user/dashboard");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred during login.");
    }
  };
  