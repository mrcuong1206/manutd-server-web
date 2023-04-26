const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

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
  deleteProduct,
} = require("./controllers/product.controller");

// User
const {
  getAllUser,
  registerUser,
  loginUser,
} = require("./controllers/user.controller");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

// mongoose.connect("mongodb://127.0.0.1:27017/todo-db");
mongoose.connect(
  "mongodb+srv://reyc:Mrcuong1206@mrcuong.yvip1ff.mongodb.net/manutd?retryWrites=true&w=majority"
);

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
app.patch("/product/:_id", updateProduct);
app.delete("/product/:_id", deleteProduct);

// User
app.get("/users", getAllUser);
app.post("/register", registerUser);
app.post("/login", loginUser);

// Search
app.get("/search", searchPlayer);
