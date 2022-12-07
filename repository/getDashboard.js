const knex = require("../config/database");

const getDashboardReport = id => {
  return knex("report").select("*").where({ user_id: id });
};

const getGoal = id => {
  return knex("goal").select("*").where({ user_id: id });
};

const updateGoalTime = payload => {
  return knex("goal")
    .update({
      start_time: payload.start_time,
      end_time: payload.end_time
    })
    .whereRaw(`"goal"."user_id" = ${payload.user_id}`);
};

module.exports = {
  getDashboardReport,
  updateGoalTime,
  getGoal
};
