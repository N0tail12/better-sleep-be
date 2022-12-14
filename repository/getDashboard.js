const knex = require("../config/database");
const moment = require("moment");
const getDashboardReport = id => {
  let weekStart = moment().startOf("isoWeek");
  let weekEnd = moment().endOf("isoWeek");
  return knex("report")
    .select("*")
    .where({ user_id: id })
    .andWhere("start_time", ">=", weekStart)
    .andWhere("end_time", "<=", weekEnd);
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
