const productModel=require("../models/productModel");

const createProduct=async function(req,res){
    let data=req.body;
    let saveData=await productModel.create(data);
    res.send(saveData);
}


module.exports.createProduct=createProduct;