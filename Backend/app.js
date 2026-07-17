const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");
const githubRoutes = require("./routes/githubRoutes");

const leetcodeRoutes = require("./routes/leetcodeRoutes");
// Load Environment Variables
dotenv.config();


// Create Express Application
const app = express();



// Parse JSON Request Body
app.use(express.json());

// Parse Cookies
app.use(cookieParser());

// Enable CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// apis

app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/leetcode", leetcodeRoutes);
app.use("/api/github", githubRoutes);




app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio CMS Backend is Running 🚀",
  });
});

module.exports = app;