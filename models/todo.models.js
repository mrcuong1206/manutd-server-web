const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  detail: [
    {
      country: {
        type: String,
      },
      dofb: {
        type: String,
      },
      join: {
        type: String,
      },
      app: {
        type: Number,
      },
      stated: {
        type: String,
      },
      img: {
        type: String,
        required: true,
      },
      biography: {
        type: String,
        required: true,
      },
    },
  ],
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
