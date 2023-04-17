const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const {
  createTodo,
  getAll,
  deleteTodo,
  updateTodo,
  getById,
} = require("./controllers/todo.controller");

const {
  getAlll,
  createProductt,
  getProductById,
} = require("./controllers/product.controller");

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

// Product
app.get("/product", getAlll);
app.get("/product/:_id", getProductById);
app.post("/product", createProductt);
