const knex = require("../config/database");

const getSchedule = id => {
    return knex("schedule")
      .select("*")
  };

  module.exports = {
    getSchedule
  };