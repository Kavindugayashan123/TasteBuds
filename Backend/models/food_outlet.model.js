const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodOutletSchema = new Schema
({
    outletName: {type: String},
    address: {type: String},
    ImageUrl: {typeof:String},
    IsSpecific: {type:Boolean} 
}, {
    timestamps: true,
});
const FoodOutlet = mongoose.model('FoodOutlet', foodOutletSchema);

module.exports = FoodOutlet;