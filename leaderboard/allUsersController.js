const { scoreDatabase, userDatabase } = require('../utils/database');

const allUsersController = (req, res) => {
  const result = scoreDatabase.map(entry => {
    const user = userDatabase.find(u => u.emailId === entry.emailId);
    return {
      emailId: user ? user.emailId : 'Unknown',
      score: entry.score
    };
  });

  res.json({ allUsers: result });
};

module.exports = allUsersController;
