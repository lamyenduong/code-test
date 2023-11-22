const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const {
  addToCart,
  getCart,
  updateCart,
  deleteCart,
} = require("../controllers/cartController");
const apiRouter = express.Router();

const apiRoute = (app) => {
  apiRouter.get("/products", getAllProducts);
  apiRouter.get("/products/:id", getProductById);
  apiRouter.post("/products", createProducts);
  apiRouter.delete("/products/:id", deleteProduct);
  apiRouter.patch("/products/:id", updateProduct);
  apiRouter.post("/cart/:id", addToCart);
  apiRouter.get("/cart", getCart);
  apiRouter.patch("/cart/:id", updateCart);
  apiRouter.delete("/cart/:id", deleteCart);

  app.use("/api/v1", apiRouter);
};

module.exports = apiRoute;
