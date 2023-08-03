const express = require("express");
const routes = express.Router();

//Job Controller Import
const {
  getProducts,
  createProduct,
  getProductById,
} = require("../controllers/productController");

routes.route("/products").get(getProducts);
routes.route("/products").post(createProduct);
routes.route("/product/:id").get(getProductById);

// routes.get("/", getJobs);

module.exports = routes;
