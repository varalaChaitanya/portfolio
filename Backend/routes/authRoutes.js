const express = require("express");

const router = express.Router();

const {
  loginAdmin,
  logoutAdmin,
} = require("../controllers/authController");

const protectAdmin = require("../middleware/protectAdmin");

// Public Route
router.post("/login", loginAdmin);

// Protected Route
router.post("/logout", protectAdmin, logoutAdmin);

module.exports = router;