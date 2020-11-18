const { Schema , model} = require("mongoose");

const FoodSchema = Schema({
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
  currency : {
      type : String, 
      default : "USD"
  }
});

exports.default = model("Meals", FoodSchema);
