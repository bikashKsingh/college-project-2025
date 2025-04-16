module.exports.users = [];

module.exports.create = function (serviceData) {
  this.users.push(serviceData);

  let response = {
    message: "User Created",
    body: serviceData,
  };

  return response;
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
