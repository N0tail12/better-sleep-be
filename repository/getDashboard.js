const knex = require("../config/database");
const moment = require("moment");

const getDashboardReport = id => {
  let weekStart = moment().startOf("isoWeek");
  let weekEnd = moment().endOf("isoWeek");
  return knex("schedule")
    .select("*")
    .where({ user_id: id })
    .andWhere({ isGoal: false })
    .andWhere("date", ">=", weekStart.format("YYYY-MM-DD"))
    .andWhere("date", "<=", weekEnd.format("YYYY-MM-DD"));
};

const getGoal = id => {
  return knex("goal").select("*").where({ user_id: id });
};

const getSleepTime = () => {
  return knex("sleeptime").select("*");
};

const updateGoalTime = payload => {
  return knex("goal")
    .update({
      start_time: payload.start_time,
      end_time: payload.end_time
    })
    .whereRaw(`"goal"."user_id" = ${payload.user_id}`);
};

const insertReport = payload => {
  if (payload.status) {
    return knex("schedule")
      .insert({
        user_id: payload.user_id,
        start_time: payload.start_time,
        end_time: payload.start_time,
        date: moment(payload.start_time).format("YYYY-MM-DD").toString(),
        text: payload.text ? payload.text : "",
        isGoal: false
      })
      .returning("id");
  } else {
    return knex("report")
      .update({
        end_time: payload.end_time,
        date: moment(payload.end_time).format("YYYY-MM-DD").toString()
      })
      .where({ id: payload.id });
  }
};

module.exports = {
  getDashboardReport,
  updateGoalTime,
  getGoal,
  getSleepTime,
  insertReport
};
