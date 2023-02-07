const UserRepository = require("../../repository/user.repository");
const Formatter = require("response-format");
const bcrypt = require("bcryptjs");

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

const CreateNewUser = async (req, res) => {
  const payload = req.body.payload;
  console.log(payload);
  const users = await UserRepository.checkExist(payload.email);
  if (users.length) {
    res.json(Formatter.badRequest("User already in use"));
  } else {
    const salt = bcrypt.genSaltSync(10);
    let hashPassword = bcrypt.hashSync(payload.password, salt);
    try {
      let data = await UserRepository.createNewAccount(payload, hashPassword);
      res.json(Formatter.success(null, data));
    } catch (error) {
      res.json(Formatter.badRequest(error));
    }
  }
};

const AddDefaultGoal = async (req, res) => {
  try {
    let user_id = req.user.user_id;
    let data = await UserRepository.addDefaultGoal(user_id);
    res.json(Formatter.success(null, data));
  } catch (error) {
    res.json(Formatter.badRequest(error));
  }
};

module.exports = {
  GetUserInfo,
  UpdateStatus,
  CreateNewUser,
  AddDefaultGoal
};
