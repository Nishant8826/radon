const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")
const OrderController=require("../controllers/orderController")

router.post("/createProduct", ProductController.createProduct  )

router.post("/createUser",commonMW.mid1, UserController.createUser  )

router.post("/createOrder",commonMW.mid1, OrderController.createOrder  )



module.exports = router;