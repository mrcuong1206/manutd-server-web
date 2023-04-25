const Product = require("../models/product.models");

const getAlll = async (req, res) => {
  // Lọc theo category
  const filter = {};
  if (req.query.category) {
    filter.category = req.query.category;
  }

  const products = await Product.find(filter);

  return res.status(200).json({
    data: {
      products,
    },
  });
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params._id);
  return res.status(200).json({
    data: {
      product,
    },
  });
};

const createProductt = async (req, res) => {
  const newProduct = await Product.create(req.body);
  console.log(req.body);

  return res.status(201).json({
    status: "success",
    data: {
      product: newProduct,
    },
  });
};

const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params._id);

  if (!product) {
    return res.status(404).json({
      message: "No product found with ID",
    });
  }

  return res.status(204).json({});
};

const updateProduct = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params._id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  return res.status(200).json({
    status: "success",
    data: {
      product: updatedProduct,
    },
  });
};

module.exports = {
  getAlll,
  createProductt,
  getProductById,
  updateProduct,
  deleteProduct,
};
