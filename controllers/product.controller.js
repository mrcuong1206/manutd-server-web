const Product = require("../models/product.models");

const getAlll = async (req, res) => {
  const products = await Product.find(req.query);

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

module.exports = { getAlll, createProductt, getProductById, updateProduct };
