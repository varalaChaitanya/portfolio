require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const connectDB = require("../config/db");
const Admin = require("../models/Admin");

const seedAdmin = async () => {
  try {
    // Connect Database
    await connectDB();

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      email: process.env.ADMIN_EMAIL,
    });

    if (existingAdmin) {
      console.log("⚠️ Admin already exists.");

      process.exit(0);
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      10
    );

    // Create Admin
    await Admin.create({
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
    });

    console.log("✅ Admin created successfully.");

    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to create admin.");
    console.error(error.message);

    process.exit(1);
  }
};

seedAdmin();