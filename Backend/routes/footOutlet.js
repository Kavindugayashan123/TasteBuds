const router = require('express').Router();
const { food_Outlet } = require('../controllers/SpecificFoodOutletController');

router.post('/', food_Outlet.add );

module.exports = router;