const { Router } = require("express");
const mongoose = require("mongoose");

const outletSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  rate: Number,
  description: {
    type: String,
    required: true,
  },
  location: String,
  imgUrl: {
    type: String,
    required: true,
  },
});
const Outlet = mongoose.model("Outlet", outletSchema);
module.exports = Outlet;
