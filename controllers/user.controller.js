const User = require("../models/user.models");

const getAllUser = async (req, res) => {
  const users = await User.find(req.query);

  return res.status(200).json({
    data: {
      users,
    },
  });
};

const createUser = async (req, res) => {
  const newUser = await User.create(req.body);

  return res.status(201).json({
    status: "success",
    data: {
      register: newUser,
    },
  });
};

module.exports = { createUser, getAllUser };
