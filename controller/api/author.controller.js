const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const CONST = require("../../constants/index");
const AuthorRepository = require("../../repository/author.repository");

const login = async (req, res) => {
  const { username, password } = req.query;
  const users = await AuthorRepository.getUserByEmail(username);
  if (!users.length) return res.status(401).json({ error: "User does not exist" });
  const user = users[0];
  let resultCompare = await bcrypt.compare(password, user.password);
  if (!resultCompare) {
    return res.status(401).json({
      error: "Password not match"
    });
  }
  const jwtSecret = process.env.JWT_SECRET;
  user.password = undefined;
  const expireTokenDays = 7;
  const token = jwt.sign(user, jwtSecret, { expiresIn: expireTokenDays * 24 + "h" });
  res.cookie("token", token, {
    expire: new Date(Number(new Date()) + expireTokenDays * 24 * 60 * 60 * 1000)
  });
  return res.json(token);
};

const logout = async (req, res) => {
  res.clearCookie();
  return res.json({ message: "Logout success!" });
};

module.exports = {
  login,
  logout
};
