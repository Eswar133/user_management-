const User = require("../models/userModel");

// Render Dashboard
exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).send("User not found.");
    res.render("dashboard", { user });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while loading the dashboard.");
  }
};

// Update User Details
exports.updateUser = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, phone },
      { new: true }
    );
    if (!user) return res.status(404).send("User not found.");
    res.redirect("/user/dashboard");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating your details.");
  }
};

// Deactivate Account
exports.deactivateAccount = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, { isActive: false });
    res.clearCookie("token");
    res.redirect("/auth/login");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deactivating your account.");
  }
};
