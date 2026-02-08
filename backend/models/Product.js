import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  condition: { type: String, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;
