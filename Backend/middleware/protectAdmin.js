const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");

const protectAdmin = async (req, res, next) => {
  try {
    // Get Token From Cookie
   const token =
  req.cookies?.adminToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. Please login.",
      });
    }

    // Verify Token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Find Admin
    const admin = await Admin.findById(decoded.id).select("-password");

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Admin not found.",
      });
    }

    // Attach Admin to Request
    req.admin = admin;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token.",
    });
  }
};

module.exports = protectAdmin;