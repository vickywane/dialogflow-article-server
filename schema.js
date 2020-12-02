import { Schema, model } from "mongoose";

const FoodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availableUnits: {
    type: Number,
    default: 0,
  },
  currency: {
    type: String,
    default: "USD",
  },
});

export default model("Meals", FoodSchema);
