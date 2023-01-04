const Formatter = require("response-format");
const ScheduleRepository = require("../../repository/getSchedule");

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

module.exports = {
  GetSchedule
};
