const { Router } = require("express");
const mongoose = require("mongoose");

const cartschema = new mongoose.Schema({
  userId: String,
  outLetIds: Array
});
const cart = mongoose.model("Cart", cartschema);
module.exports = cart;