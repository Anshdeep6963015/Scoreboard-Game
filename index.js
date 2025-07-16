// index.js

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const { userDatabase, scoreDatabase, prizeDatabase } = require('./utils/database');

// Optional: attach to global if you still want global access
global.userDatabase = userDatabase;
global.scoreDatabase = scoreDatabase;
global.prizeDatabase = prizeDatabase;


// Routes
const registerRoute = require('./register/register');
const loginRoute = require('./login/login');
const scoreRoute = require('./score/score');
const leaderboardRoute = require('./leaderboard/leaderboard');

// Use routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/score', scoreRoute);
app.use('/leaderboard', leaderboardRoute);

// Root route
app.get('/', (req, res) => {
  res.send('🎮 FA1 Game Backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on: http://localhost:${PORT}`);
});
