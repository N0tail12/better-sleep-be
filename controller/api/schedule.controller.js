const Formatter = require("response-format");
const ScheduleRepository = require("../../repository/schedule");

const GetSchedule = async (req, res) => {
  try {
    let id = req.user.user_id;
    let data = await ScheduleRepository.getSchedule(id);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const AddSchedule = async (req, res) => {
  try {
    let payload = req.body;
    let user_id = req.user.user_id;
    payload.user_id = user_id;
    let data = await ScheduleRepository.addSchedule(payload);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const UpdateSchedule = async (req, res) => {
  try {
    let { id } = req.params;
    let payload = req.body;
    let data = await ScheduleRepository.updateSchedule(payload, id);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const DeleteSchedule = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await ScheduleRepository.deleteSchedule(id);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

module.exports = {
  GetSchedule,
  AddSchedule,
  UpdateSchedule,
  DeleteSchedule
};
