const User = require("../models/userModel");

//LOGIN USER
const loginUser = async (req, res) => {
  res.json({ mssg: "LOGIN USER" });
};

//SIGNUP USER
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.msg });
  }

  res.json({ mssg: "SIGNUP USER" });
};

module.exports = {
  loginUser,
  signupUser,
};
