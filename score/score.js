const express = require('express');
const router = express.Router();

const submitScore = require('./scoreController'); // ✅ make sure it's a function

router.post('/', submitScore); // ✅ use the function here

module.exports = router;
