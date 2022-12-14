const DashboardRepository = require("../../repository/getDashboard");
const Formatter = require("response-format");

const GetDashboardReport = async (req, res) => {
  try {
    let id = req.user.user_id;
    let data = await DashboardRepository.getDashboardReport(id);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const GetGoal = async (req, res) => {
  try {
    let id = req.user.user_id;
    let data = await DashboardRepository.getGoal(id);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const GetSleepTime = async (req, res) => {
  try {
    let data = await DashboardRepository.getSleepTime();
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const updateGoalTime = async (req, res) => {
  try {
    let id = req.params.id;
    let payload = req.body;
    payload.user_id = id;
    let data = await DashboardRepository.updateGoalTime(payload);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const InsertReport = async (req, res) => {
  try {
    let payload = req.body;
    payload.user_id = req.user.user_id;
    let data = await DashboardRepository.insertReport(payload);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

module.exports = {
  GetDashboardReport,
  updateGoalTime,
  GetGoal,
  GetSleepTime,
  InsertReport
};
