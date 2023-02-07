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

const addDefaultGoal = user_id => {
  return knex.insert({ user_id: user_id, start_time: "22:00", end_time: "06:00", date: "2023-01-01" }).into("goal");
};

module.exports = {
  getUserInfo,
  updateStatus,
  checkExist,
  createNewAccount,
  addDefaultGoal
};
