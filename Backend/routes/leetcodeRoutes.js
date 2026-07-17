const express = require("express");

const router = express.Router();

const 
  getLeetCodeProfile
 = require("../controllers/leetCodeController");

router.get("/", getLeetCodeProfile);

module.exports = router;