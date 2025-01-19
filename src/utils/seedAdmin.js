const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Admin = require("../models/adminModel");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const createAdmin = async () => {
  const admin = new Admin({
    email: "admin@example.com",
    password: "admin@123",
  });

  await admin.save();
  console.log("Super Admin created!");
  mongoose.disconnect();
};

createAdmin();
