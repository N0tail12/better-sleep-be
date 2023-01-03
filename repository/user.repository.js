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

const checkExist = email => {
  return knex.select().from("user").where({ email: email });
};

const createNewAccount = (payload, hashPassword) => {
  console.log(payload, hashPassword);
  return knex
    .insert({
      fullname: payload.fullname,
      email: payload.email,
      image: payload.image,
      age: payload.age,
      password: hashPassword,
      status: 0
    })
    .into("user");
};

module.exports = {
  getUserInfo,
  updateStatus,
  checkExist,
  createNewAccount
};
