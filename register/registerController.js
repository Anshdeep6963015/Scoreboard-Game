// register/registerController.js

const { isValidEmail } = require('../utils/validator');
const { userDatabase } = require('../utils/database'); // ✅ Use the real shared array

function registerUser(req, res) {
  console.log("Incoming Body:", req.body);
  
  const { emailId, password } = req.body;

  if (!emailId || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  if (!isValidEmail(emailId)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  const existingUser = userDatabase.find(user => user.emailId === emailId); // ✅ fixed
  if (existingUser) {
    return res.status(409).json({ message: "Email already registered." });
  }

  userDatabase.push({ emailId, password }); // ✅ fixed
  return res.status(201).json({ message: "Registration successful!" });
}

module.exports = { registerUser };
