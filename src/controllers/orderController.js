const productModel=require("../models/productModel");
const userModel=require("../models/userModel");
const orderModel=require("../models/orderModel");

const createOrder=async function(req,res){
    let orderData=req.body;
    let userID=req.body.userId;
    let productID=req.body.productId;

    
    //user Validation
    let user = await userModel.findById(userID);
    if (!user) {
        return res.send({ message: "User doesn't exist. Please provide a valid userId" });
    };
    //product validation
    let product = await productModel.findById(productID);
    if (!product) {
        return res.send({ message: "Product doesn't exist. Please provide a valid productId" });
    };
    
    let saveData=await orderModel.create(orderData);
    res.send(saveData);

    
};



module.exports.createOrder=createOrder;