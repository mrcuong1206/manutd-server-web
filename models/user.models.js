const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  confirmPassword: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", userDetailSchema);

module.exports = User;
