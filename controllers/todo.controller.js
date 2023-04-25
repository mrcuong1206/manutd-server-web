const Todo = require("../models/todo.models");

const getAll = async (req, res) => {
  const todos = await Todo.find(req.query);

  return res.status(200).json({
    data: {
      todos,
    },
  });
};

// Search player no button
async function searchPlayer(query) {
  const player = await Todo.find({
    $or: [
      { firstname: { $regex: query, $options: "i" } },
      { lastname: { $regex: query, $options: "i" } },
    ],
  });
  console.log(player);
}

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
