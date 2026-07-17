const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    email: {
  type: String,
  required: [true, "Admin email is required"],
  unique: true,
  trim: true,
  lowercase: true,
  match: [
    /^\S+@\S+\.\S+$/,
    "Please enter a valid email address",
  ],
},

password: {
    type: String,
    required: [true, "Password is required"],
  },

  resetPasswordToken: {
  type: String,
},

resetPasswordExpire: {
  type: Date,
},

},
  
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;