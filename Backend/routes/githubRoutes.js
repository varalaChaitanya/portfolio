const express = require("express");

const router = express.Router();

const {
  getGitHubProfile,
} = require("../controllers/githubController");

router.get("/", getGitHubProfile);

module.exports = router;