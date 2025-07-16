// leaderboard/topUser.js

const express = require('express');
const router = express.Router();
const { getTopUser } = require('./topUserController');

// GET /topuser
router.get('/', getTopUser);

module.exports = router;
