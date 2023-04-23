const Todo = require("../models/todo.models");

const getAll = async (req, res) => {
  const todos = await Todo.find(req.query);

  return res.status(200).json({
    data: {
      todos,
    },
  });
};

const searchPlayer = async (req, res) => {
  const searchText = req.query.searchText;
  try {
    const searchText = req.query.searchText;
    const todos = await Todo.find({
      lastName: new RegExp(searchText, "i"),
    });
    res.status(200).json({ success: true, data: { todos } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// search
// const getAll = async (req, res) => {
//   let todos;
//   if (req.query.searchText) {
//     todos = await Todo.find({ $text: { $search: req.query.searchText } });
//   } else {
//     todos = await Todo.find();
//   }
//   return res.status(200).json({
//     data: {
//       todos,
//     },
//   });
// };

const createTodo = async (req, res) => {
  const newTodo = await Todo.create(req.body);

  console.log(req.body);

  return res.status(201).json({
    status: "success",
    data: {
      todo: newTodo,
    },
  });
};

const updateTodo = async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({
    status: "success",
    data: {
      todo: updatedTodo,
    },
  });
};

const getById = async (req, res) => {
  const player = await Todo.findById(req.params._id);
  return res.status(200).json({
    data: {
      player,
    },
  });
};

const deleteTodo = async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params._id);

  if (!todo) {
    return res.status(404).json({
      message: "No todo found with ID",
    });
  }

  return res.status(204).json({});
};

module.exports = {
  createTodo,
  getAll,
  deleteTodo,
  updateTodo,
  getById,
  searchPlayer,
};
