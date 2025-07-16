const express = require('express');
const router = express.Router();
const loginController = require('./loginController');
const validator = require('../utils/validator');

router.post('/', validator.validateEmail, loginController.loginUser);

module.exports = router;
