const express = require('express');
const router = express.Router();
const bookModel= require("../models/userModel.js")
const bookController= require("../controllers/userController")

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBookData)

module.exports = router;