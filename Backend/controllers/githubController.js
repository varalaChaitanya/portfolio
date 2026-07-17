const {
  fetchGitHubProfile,
} = require("../services/githubService");

const getGitHubProfile = async (req, res) => {
  try {
    const username = process.env.GITHUB_USERNAME;

    const profile = await fetchGitHubProfile(username);

    const response = {
      username: profile.login,

      avatar: profile.avatar_url,

      name: profile.name,

      bio: profile.bio,

      followers: profile.followers,

      following: profile.following,

      publicRepos: profile.public_repos,

      publicGists: profile.public_gists,

      profileUrl: profile.html_url,

      location: profile.location,

      company: profile.company,
    };

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getGitHubProfile,
};