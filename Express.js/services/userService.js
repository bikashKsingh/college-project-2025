module.exports.users = [];
const UserModel = require("../database/model/userModel");
const defaultResponse = require("../utils/defaultResponse");

module.exports.create = async function (serviceData) {
  try {
    let response = {};
    // let user = {
    //   name: serviceData.name,
    //   email: serviceData.email,
    //   mobile: serviceData.mobile,
    // };

    const newData = new UserModel(serviceData);
    const result = await newData.save();

    response.message = "Data Created";
    response.body = result;

    return response;
  } catch (error) {
    console.log("service : userService : create\nError : ", error.message);
  }
};

module.exports.findAll = async function (serviceData) {
  let response = {
    message: "User Fetched",
    body: null,
  };

  let result = await UserModel.find();

  response.body = result;

  return response;
};

module.exports.findOne = async function (serviceData) {
  let id = serviceData.id;
  let response = { ...defaultResponse };
  let result = await UserModel.findById(id);

  response.body = result;
  response.message = "User Fetched";

  return response;
};

module.exports.update = async function (id, serviceData) {
  try {
    let response = {};

    let user = {};
    if (serviceData.name) {
      user.name = serviceData.name;
    }

    if (serviceData.email) {
      user.email = serviceData.email;
    }

    if (serviceData.mobile) {
      user.mobile = serviceData.mobile;
    }

    const newData = new UserModel(user);
    const result = await newData.save();

    response.message = "Data Created";
    response.body = result;

    return response;
  } catch (error) {
    console.log("service : userService : create\nError : ", error.message);
  }
};
