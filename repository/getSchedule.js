const knex = require("../config/database");

const getSchedule = id => {
  return knex("schedule").select("*").where({ user_id: id });
};

module.exports = {
  getSchedule
};
