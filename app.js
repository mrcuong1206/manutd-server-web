const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bcrypt = require("bcryptjs");

//Player
const {
  createTodo,
  getAll,
  deleteTodo,
  updateTodo,
  getById,
  searchPlayer,
} = require("./controllers/todo.controller");

// Product
const {
  getAlll,
  createProductt,
  getProductById,
  updateProduct,
} = require("./controllers/product.controller");

// User
const {
  getAllUser,
  registerUser,
  loginUser,
} = require("./controllers/user.controller");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/todo-db");

app.listen(8000, () => {
  console.log(`app listen on PORT 8000`);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

// Player
app.get("/todo", getAll);
app.get("/todo/:_id", getById);
app.post("/todo", createTodo);
app.delete("/todo/:_id", deleteTodo);
app.patch("/todo/:_id", updateTodo);

// search
app.get("todo/search", searchPlayer);

// Product
app.get("/product", getAlll);
app.get("/product/:_id", getProductById);
app.post("/product", createProductt);
app.patch("/product/:_id", updateProduct);

// User
app.get("/users", getAllUser);
app.post("/register", registerUser);
app.post("/login", loginUser);
