// utils/validator.js

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateEmail(req, res, next) {
  if (!isValidEmail(req.body.emailId)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }
  next();
}

module.exports = { isValidEmail, validateEmail };
