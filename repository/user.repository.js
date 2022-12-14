const knex = require("../config/database");

const getUserInfo = id => {
  return knex("user")
    .select("user.fullname", "user.email", "user.status", "user.image", "user.age", "user.user_id")
    .where({ user_id: id });
};

const updateStatus = (id, status) => {
  return knex("user")
    .update({
      status: status
    })
    .where({ user_id: id });
};

module.exports = {
  getUserInfo,
  updateStatus
};
