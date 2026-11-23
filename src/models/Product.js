import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  storage: {
    type: String,
    enum: ["64GB", "128GB", "256GB", "512GB", "1TB"],
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  specs: {
    screen: {
      type: String,
    },
    camera: {
      type: String,
    },
    battery: {
      type: String,
    },
    os: {
      type: String,
    },
    cpu: {
      type: String,
    },
    ram: {
      type: String,
    },
  },
});

export default mongoose.model("Product", productSchema);
