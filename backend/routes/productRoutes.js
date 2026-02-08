import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// POST: Sell Phone
router.post("/sell", async (req, res) => {
  try {
    const { brand, model, condition } = req.body;

    // Simple price logic
    let basePrice = 50000;
    if (condition === "Good") basePrice -= 5000;
    else if (condition === "Average") basePrice -= 10000;
    else if (condition === "Bad") basePrice -= 20000;

    const newProduct = new Product({
      brand,
      model,
      condition,
      price: basePrice
    });

    await newProduct.save();
    res.json({ success: true, price: basePrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// GET: All sold phones
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post("/sell", async (req, res) => {
  try {
    const { brand, model, condition } = req.body;

    let basePrice = 10000;
    if (brand.toLowerCase() === "apple") basePrice = 40000;
    else if (brand.toLowerCase() === "samsung") basePrice = 25000;
    else if (brand.toLowerCase() === "oneplus") basePrice = 30000;

    if (condition === "Average") basePrice *= 0.8;
    if (condition === "Bad") basePrice *= 0.5;

    const newProduct = new Product({
      brand,
      model,
      condition,
      price: Math.floor(basePrice),
    });

    await newProduct.save();

    res.json({ price: Math.floor(basePrice) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


export default router;
