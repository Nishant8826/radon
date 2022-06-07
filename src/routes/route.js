const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")



router.post('/createBook',  BookController.getBookData  );                  //Q.1

router.get('/getBooks',  BookController.newBookData  );                     //Q.2

router.post('/getBookInYear',  BookController.getBookInYear  );             //Q.3

router.post('/getParticularBooks',  BookController.getParticularBooks  );   //Q.4

router.get('/getXINRBook',  BookController.getXINRBook  );                  //Q.5

router.get('/getRandomBook',  BookController.getRandomBooks  );             //Q.6
 
module.exports = router;
