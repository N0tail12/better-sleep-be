const knex = require("../config/database");

const getDashboardDetail = id => {
  return knex("report")
    .join("goal", "report.user_id", "=", "goal.user_id")
    .select("*")
    .whereRaw(`"report"."user_id" = ${id}`);
};

module.exports = {
  getDashboardDetail
};
