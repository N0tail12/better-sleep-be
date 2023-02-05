const knex = require("../config/database");
const moment = require("moment");

const getSchedule = payload => {
  return knex("schedule")
    .select("*")
    .where({ user_id: payload.id })
    .andWhere("date", ">=", payload.start_time ? payload.start_time : "1979-01-01")
    .andWhere("date", "<=", payload.end_time ? payload.end_time : "9999-01-01");
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

const updateSchedules = payload => {
  let dayDiff = moment(payload.end_day).diff(payload.start_day, "days");
  let data = [];
  for (let i = -1; i < dayDiff; ++i) {
    let date_start = moment(payload.start_day).add(i, "days").format("YYYY-MM-DD");
    let date_end = moment(date_start).add(1, "days").format("YYYY-MM-DD");
    let goal_start = moment(date_start + " " + payload.start_time);
    let goal_end = moment(date_end + " " + payload.end_time);
    data.push({
      start_time: goal_start,
      end_time: goal_end,
      text: payload.text ? payload.text : "",
      isGoal: payload.isGoal,
      date: moment(goal_end).format("YYYY-MM-DD"),
      user_id: payload.user_id
    });
  }
  try {
    knex("schedule")
      .insert(data)
      .then(result => console.log(result));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSchedule,
  addSchedule,
  updateSchedule,
  deleteSchedule,
  updateSchedules
};
