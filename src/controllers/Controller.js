const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");

//Q.1
const createBook = async function (req, res) {
  let data = req.body;
  let createData = await BookModel.create(data);
  res.send({ msg: createData });
};
const createAuthor = async function (req, res) {
  let data = req.body;
  let createData = await AuthorModel.create(data);
  res.send({ msg: createData });
};

//Q.2
const searchByID = async function (req, res) {
  let data = await AuthorModel.find({ author_name: "Chetan Bhagat" });
  let searchBook = await BookModel.find({
    author_id: data[0].author_id
  });
  res.send({ msg: searchBook });
};

//Q.3
const twoState = async function (req, res) {
  let allBook = await BookModel.find({name:"Two states"});
  let bookAuthor = await AuthorModel.find({author_Id:allBook[0].author_Id})
    let authorBook2 = bookAuthor[0].author_name
 await BookModel.findOneAndUpdate({name:"Two states"},{price:100}) 
 let uPrice = allBook[0].price
      res.send({ "author_name":authorBook2,"price":uPrice })
}

// let twoState=async function(req,res){
//   let data=await AuthorModel.findOneAndUpdate({author_name:"Two states"},{$set:{prices:100}},{new:true})
//   let authorData=await AuthorModel.find({author_id:data[0].author_id}).select("author_name")
//   let price=data.prices
//   res.send({msg:authorData,price})
// }



//Q.4
const priceBook = async function (req, res) {
  let book = await BookModel.find({ price: { $gt: 49, $lt: 101 } }).select({
    author_id: 1,
    id: 0,
  });
  let Author1=await AuthorModel.find({$or:book}).select({author_id:1,id:0});
  res.send(Author1)
};
module.exports.createBook = createBook;
module.exports.createAuthor = createAuthor;
module.exports.searchByID = searchByID;
module.exports.twoState = twoState;
module.exports.priceBook = priceBook;