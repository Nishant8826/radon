const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const bookController= require("../controllers/userController")

// router.get("/book", function (req, res) {
//     res.send("Write a Book Details Below to add in database")
// })
// router.post("/get_book_data",function(req,res){
// })
router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBookData)

module.exports = router;