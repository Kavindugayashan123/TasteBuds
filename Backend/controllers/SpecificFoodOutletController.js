let FoodOutlet = require('../models/food_outlet.model');
//var jwt = require('jsonwebtoken');

const food_Outlet={
     add : (req, res) => {
    const outletName = req.body.username;
    const address = req.body.email;
    const ImageUrl = req.body.address;
    const IsSpecific = req.body.password;


    const newFoodOutlet  = new FoodOutlet({
        outletName,
        address,
        ImageUrl,
        IsSpecific,
    });
    
    newFoodOutlet.save()
    .then(() => res.json('New food Outlet added successfully!'))
    .catch(err => res.status(400).json('Error: ' + err));
    }
}

module.exports = {
    food_Outlet    
 };