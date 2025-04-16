const userService = require("../services/userService");

module.exports.create = function (req, res) {
  let user = req.body;

  const response = userService.create(user);
  res.send(response);
};

module.exports.findAll = function (req, res) {
  const response = userService.findAll();
  res.send(response);
};

module.exports.findOne = function (req, res) {
  const response = userService.findOne(req.params);
  res.send(response);
};
