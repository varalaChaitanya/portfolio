const { LeetCode } = require("leetcode-query");

const leetcode = new LeetCode();

const fetchLeetCodeProfile = async (username) => {
  try {
    return await leetcode.user(username);
   
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  fetchLeetCodeProfile,
};