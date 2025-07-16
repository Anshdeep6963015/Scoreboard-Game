// login/loginController.js

const users = global.userDatabase;

function loginUser(req, res) {
  const { emailId, password } = req.body;

  if (!emailId || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  const user = userDatabase.find(
    (u) => u.emailId === emailId && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  return res.status(200).json({ message: "Login successful!" });
}

module.exports = { loginUser };
