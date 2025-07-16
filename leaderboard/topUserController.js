const { scoreDatabase, userDatabase } = require('../utils/database');

const topUsersController = (req, res) => {
  const sortedScores = [...scoreDatabase].sort((a, b) => b.score - a.score);
  const topThree = sortedScores.slice(0, 3);

  const result = topThree.map(entry => {
    const user = userDatabase.find(u => u.emailId === entry.emailId);
    return {
      emailId: user ? user.emailId : 'Unknown',
      score: entry.score
    };
  });

  res.json({ topUsers: result });
};

module.exports = topUsersController;
