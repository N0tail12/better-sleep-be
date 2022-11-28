const knex = require("../config/database");

const getUserByEmail = email => {
  return knex.select("user.id", "user.name", "user.email", "user.password").from("user").where({ email: email });
};

module.exports = {
  getUserByEmail
};
