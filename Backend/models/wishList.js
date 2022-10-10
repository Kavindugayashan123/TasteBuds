const { Router } = require("express");
const mongoose = require("mongoose");

const wishListschema = new mongoose.Schema({
  userId: String,
  outLetIds: Array
});
const WishList = mongoose.model("WishList", wishListschema);
module.exports = WishList;