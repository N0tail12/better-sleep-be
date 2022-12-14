const UserRepository = require("../../repository/user.repository");
const Formatter = require("response-format");

const GetUserInfo = async (req, res) => {
  try {
    let id = req.user.user_id;
    let data = await UserRepository.getUserInfo(id);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const UpdateStatus = async (req, res) => {
  try {
    let id = req.params.id;
    let { status } = req.body;
    let data = await UserRepository.updateStatus(id, status);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

module.exports = {
  GetUserInfo,
  UpdateStatus
};
