const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("user", userSchema);

// module.exports.create = 10; // const abc = require("a"); abc.create
// module.exports = 10; // abc
