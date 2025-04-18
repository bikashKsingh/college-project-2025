module.exports.users = [];
const UserModel = require("../database/model/userModel");

module.exports.create = async function (serviceData) {
  try {
    let response = {};
    let user = {
      name: serviceData.name,
      email: serviceData.email,
      mobile: serviceData.mobile,
    };

    const newData = new UserModel(user);
    const result = await newData.save();

    response.message = "Data Created";
    response.body = result;

    return response;
  } catch (error) {
    console.log("service : userService : create\nError : ", error.message);
  }
};

module.exports.findAll = function (serviceData) {
  let response = {
    message: "User Fetched",
    body: this.users,
  };

  return response;
};

module.exports.findOne = function (serviceData) {
  let id = serviceData.id;

  for (let user of this.users) {
    if (user.id == id) {
      let response = {
        message: "User Fetched",
        body: user,
      };

      return response;
    }
  }

  let response = {
    message: "Data not available",
    body: null,
  };

  return response;
};
