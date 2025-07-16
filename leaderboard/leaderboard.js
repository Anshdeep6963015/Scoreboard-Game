// leaderboard/topUserController.js

function topUserController(req, res) {
  const sortedScores = global.scoreDatabase
    .sort((a, b) => b.score - a.score)
    .slice(0, 3); // Top 3 users only

  const prizeMap = ["Gold Medal 🥇", "Silver Medal 🥈", "Bronze Medal 🥉"];

  const topUsers = sortedScores.map((user, index) => ({
    emailId: user.emailId,
    score: user.score,
    prize: prizeMap[index] || "Participant 🎖️"
  }));

  res.status(200).json({ topUsers });
}

module.exports = topUserController;
