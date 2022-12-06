const DashboardRepository = require("../../repository/getDashboard");
const Formatter = require("response-format");

const getDashboard = async (req, res) => {
  try {
    let id = req.user.user_id;
    let data = await DashboardRepository.getDashboardDetail(id);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

module.exports = {
  getDashboard
};
