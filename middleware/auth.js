const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");

exports.requireLogin = expressJwt({
  secret: process.env.JWT_SECRET
});
