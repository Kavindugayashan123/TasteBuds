const express = require("express");
const cart = require("../models/cart");
const FoodOutlet = require("../models/foodOutlet");
const router = express.Router();

router.post("/addtocart", async (req, res) => {

    try {
        console.log("req.body====>>>",req.body)

        const outLetId = req.body.outLetId

        let result = {}
        let cart = await cart.findOne({userId:req.body.userId});
        if(cart && cart.outLetIds.length >= 0){
            cart.outLetIds.push(outLetId)

            result = await cart.update({userId:req.body.userId},{$set:{outLetIds:cart.outLetIds}})
            res.send(cart);


        }else{
            let Cart = new Cart({
                userId: req.body.userId,
                outLetIds: [outLetId]
         
              });
            result = await cart.save();
            res.send(result);

        }
      } catch (err) {
        console.log(err)
        return res.status(404).send(`Not availbe this Id: ${err.message}`);
      }

})

module.exports = router;