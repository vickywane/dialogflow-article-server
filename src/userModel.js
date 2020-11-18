const { Schema, model } = require("mongoose");
const { v4: uuid } = require("uuid");

const userModel = new Schema({
  user_id: {
    type: String,
    default: uuid(),
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    default: null,
  },
});

// module.exports(;
exports.default = model("User", userModel);
