const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const getAllUser = async (req, res) => {
  const users = await User.find(req.query);

  return res.status(200).json({
    data: {
      users,
    },
  });
};

const registerUser = async (req, res) => {
  const { fname, lname, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
    });
    if (res.status(200)) {
      return res.json({ status: "ok" });
    } else {
      return res.json({ error: "error" });
    }
  } catch (error) {
    res.send({ status: "error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({}, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", oke: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
};

module.exports = { registerUser, getAllUser, loginUser };
