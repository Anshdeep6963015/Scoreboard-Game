const express = require('express');
const router = express.Router();

const { registerUser } = require('./registerController');
const { validateEmail } = require('../utils/validator');

router.post('/', validateEmail, registerUser);  // 🔴 registerUser or validateEmail is not a function

module.exports = router;
