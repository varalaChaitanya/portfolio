const {
  fetchLeetCodeProfile,
} = require("../services/leetcodeService");

const getLeetCodeProfile = async (req, res) => {
  try {
    const username = process.env.LEETCODE_USERNAME;

    const profile = await fetchLeetCodeProfile(username);

    const solvedStats = {};

    profile.matchedUser.submitStats.acSubmissionNum.forEach(
      (item) => {
        solvedStats[item.difficulty.toLowerCase()] =
          item.count;
      }
    );

    const response = {
      username: profile.matchedUser.username,

      profileUrl: `https://leetcode.com/u/${username}/`,

      avatar:
        profile.matchedUser.profile.userAvatar,

      githubUrl:
        profile.matchedUser.githubUrl,

      ranking:
        profile.matchedUser.profile.ranking,

      starRating:
        profile.matchedUser.profile.starRating,

      solved: {
        all: solvedStats.all || 0,
        easy: solvedStats.easy || 0,
        medium: solvedStats.medium || 0,
        hard: solvedStats.hard || 0,
      },

      recentAccepted:
        profile.recentSubmissionList
          .filter(
            (item) =>
              item.statusDisplay === "Accepted"
          )
          .slice(0, 3),
    };

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = 
  getLeetCodeProfile;