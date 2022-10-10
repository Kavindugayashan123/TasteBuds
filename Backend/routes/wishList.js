const express = require("express");
const WishList = require("../models/wishList");
const FoodOutlet = require("../models/foodOutlet");
const router = express.Router();

router.post("/addItems", async (req, res) => {

    try {
        console.log("req.body====>>>",req.body)

        const outLetId = req.body.outLetId

        let result = {}
        let WishLists = await WishList.findOne({userId:req.body.userId});
        if(WishLists && WishLists.outLetIds.length >= 0){
            WishLists.outLetIds.push(outLetId)

            result = await WishList.update({userId:req.body.userId},{$set:{outLetIds:WishLists.outLetIds}})
            res.send(WishLists);


        }else{
            let wishList = new WishList({
                userId: req.body.userId,
                outLetIds: [outLetId]
         
              });
            result = await wishList.save();
            res.send(result);

        }
      } catch (err) {
        console.log(err)
        return res.status(404).send(`Not availbe this Id: ${err.message}`);
      }

})

router.get("/:userId", async (req, res) => {

    try {
        const reqId = req.params.userId;
        let WishLists = await WishList.findOne({userId:reqId});
        console.log("WishLists====>>>",WishLists)
        const outLetArr = []
        for(const outLetId of WishLists.outLetIds){
            const outLet = await FoodOutlet.findById(outLetId);
     
            outLetArr.push(outLet)
        }
        console.log("WishLists====>>>",WishLists)
        res.send(outLetArr);
      } catch (err) {
        return res.status(404).send(`Not availbe this Id: ${err.message}`);
      }

})
router.delete("/deleteFood/:userId/:outLetId", async (req, res) => {

    try {
        const userId = req.params.userId;
        const outLetIdFromBody = req.params.outLetId;
        let WishLists = await WishList.findOne({userId:userId});
        console.log("WishLists.outLetIds.=====>>>",WishLists.outLetIds)

        const removeOutLetList = WishLists.outLetIds.filter((outLetId)=> outLetId !== outLetIdFromBody )
        result = await WishList.update({userId:userId},{$set:{outLetIds:removeOutLetList}})
        console.log("removeFoodList.=====>>>",removeOutLetList)
        res.send(removeOutLetList);
      } catch (err) {
        return res.status(404).send(`Not availbe this Id: ${err.message}`);
      }

})
// router.post("/UpdateItems", async (req, res) => {

//     try {
//         console.log("req.body====>>>",req.body)
//         const userId = req.body.userId
//         let WishLists = await WishList.findOne({userId:reqId});
//         let wishList = new WishList({
//             userId: req.body.userId,
//             foodIds: [foodId]
     
//           });
//            const result = await wishList.save();
//            console.log("Result===>>>",result)

//         res.send(result);
//       } catch (err) {
//         console.log(err)
//         return res.status(404).send(`Not availbe this Id: ${err.message}`);
//       }

// })


module.exports = router;