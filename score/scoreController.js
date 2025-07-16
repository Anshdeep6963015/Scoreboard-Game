// score/scoreController.js

const { userDatabase, scoreDatabase } = require('../utils/database');

function submitScore(req, res) {
    const { emailId, profit, loss, time } = req.body;

    // Basic validation
    if (!emailId || profit == null || loss == null || time == null) {
        return res.status(400).json({ message: "All fields (emailId, profit, loss, time) are required." });
    }

    const user = userDatabase.find(u => u.emailId === emailId);
    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }

    // Check for previous submissions (limit to 2)
    const userScores = scoreDatabase.filter(score => score.emailId === emailId);
    if (userScores.length >= 2) {
        return res.status(403).json({ message: "You have already submitted the score twice." });
    }

    // Calculate score using formula
    const score = (profit * 100) / (loss * time);

    // Add to score database
    scoreDatabase.push({ emailId, profit, loss, time, score });

    return res.status(201).json({
        message: "Score submitted successfully.",
        calculatedScore: score.toFixed(2)
    });
}

module.exports = submitScore;
