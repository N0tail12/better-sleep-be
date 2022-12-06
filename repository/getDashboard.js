const knex = require("../config/database");

const getDashboardDetail = id => {
  return knex("report")
    .join("goal", "report.user_id", "=", "goal.user_id")
    .select("*")
    .whereRaw(`"report"."user_id" = ${id}`);
};

const updateGoalTime = payload => {
    
    return knex("goal").update({
        start_time: payload.start_time,
        end_time: payload.end_time
    }).whereRaw(`"goal"."user_id" = ${payload.user_id}`);
};

module.exports = {
  getDashboardDetail,
  updateGoalTime
};
