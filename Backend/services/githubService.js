const axios = require("axios");

const fetchGitHubProfile = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        timeout: 10000,
      }
    );

    return response.data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Unable to fetch GitHub profile.");
  }
};

module.exports = {
  fetchGitHubProfile,
};