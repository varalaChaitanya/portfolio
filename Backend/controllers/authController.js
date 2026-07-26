const bcrypt = require("bcrypt");

const Admin = require("../models/Admin");

const generateToken = require("../utils/generateToken");

/*
    POST /api/auth/login
*/

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check Required Fields

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required.",
      });
    }

    // Find Admin

    const admin = await Admin.findOne({
      email: email.toLowerCase(),
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password.",
      });
    }

    // Compare Password

    const isPasswordMatched = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password.",
      });
    }

    // Generate JWT

    const token = generateToken(admin._id);

    // Send Cookie

    res.cookie("adminToken", token, {
  httpOnly: true,
  secure: true,
  sameSite: "None",
  maxAge: Number(process.env.COOKIE_EXPIRES_IN),
});

    return res.status(200).json({
      success: true,
      message: "Login Successful.",
      admin: {
        id: admin._id,
        email: admin.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/*
    POST /api/auth/logout
*/

const logoutAdmin = async (req, res) => {
  try {
    res.clearCookie("adminToken", {
  httpOnly: true,
  secure: true,
  sameSite: "None",
});

    return res.status(200).json({
      success: true,
      message: "Logged out successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  loginAdmin,logoutAdmin
};