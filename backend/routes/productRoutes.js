const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../contoller/productControllers");

// Get all products from db
// routes GET /api/products
router.get("/", getAllProducts);

// Get product by id from db
// routes GET /api/products/id
router.get("/:id", getProductById);

module.exports = router;
