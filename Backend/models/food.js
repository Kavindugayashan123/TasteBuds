const { Router } = require("express");
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: String,
  category: {
    type: String,
    required: true,
  },
  price: Number,
  imgUrl: String,
  outletId: {
    type: String,
    required: true,
  },
});
const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
