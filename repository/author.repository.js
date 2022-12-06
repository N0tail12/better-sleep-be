const knex = require("../config/database");

const getUserByEmail = email => {
  return knex
    .select("user.user_id", "user.fullname", "user.email", "user.password")
    .from("user")
    .where({ email: email });
};

module.exports = {
  getUserByEmail
};
