const knex = require("../config/database");
const moment = require("moment");

const getSchedule = id => {
  return knex("schedule").select("*").where({ user_id: id });
};

const addSchedule = payload => {
  return knex("schedule").insert({
    start_time: payload.start_time,
    end_time: payload.end_time,
    text: payload.text ? payload.text : "",
    isGoal: payload.isGoal,
    date: moment(payload.end_time).format("YYYY-MM-DD"),
    user_id: payload.user_id
  });
};

const updateSchedule = (payload, id) => {
  return knex("schedule")
    .update({
      start_time: payload.start_time,
      end_time: payload.end_time,
      text: payload.text ? payload.text : "",
      isGoal: payload.isGoal,
      date: moment(payload.end_time).format("YYYY-MM-DD"),
      user_id: payload.user_id
    })
    .where("id", id);
};

const deleteSchedule = id => {
  return knex("schedule").where("id", id).del();
};

module.exports = {
  getSchedule,
  addSchedule,
  updateSchedule,
  deleteSchedule
};
