import mongoose from "mongoose";

const pductSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: Number },
  description: { type: String },
  gender: { type: String },
  category: { type: String },
  image: { type: String, required: true },
});

const ProductSchema = mongoose.model("Product", pductSchema);

export default ProductSchema;
