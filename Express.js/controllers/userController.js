const userService = require("../services/userService");

module.exports.create = async function (req, res) {
  let user = req.body;

  const response = await userService.create(user);
  res.send(response);
};

module.exports.findAll = async function (req, res) {
  const response = await userService.findAll();
  res.send(response);
};

module.exports.findOne = async function (req, res) {
  const response = await userService.findOne(req.params);
  res.send(response);
};
