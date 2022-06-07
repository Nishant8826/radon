
const BookModel = require("../models/bookModel.js")
//Q.1
const getBookData = async function (req, res) {
    var data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}
//Q.2
const newBookData = async function (req, res) {
    let allBook = await BookModel.find().select({ BookName: 1, AuthorName: 1, _id: 0 })
    res.send({ msg: allBook })
}
//Q.3
const getBookInYear = async function (req, res) {
    let year=req.body.Year;
    let allBook = await BookModel.find({ Year: year });
    res.send({ msg: allBook });
}

//Q.4
const getParticularBooks = async function (req, res) {
    let allBook = await BookModel.find(req.body)
    res.send({ msg: allBook })
}

//Q.5
const getXINRBook = async function (req, res) {
    let allBook = await BookModel.find({$or:[{"prices":"₹100"},{"prices":"₹200"},{"prices":"₹500"}]})
    res.send({ msg: allBook })
}

//Q.6
const getRandomBooks = async function (req, res) {
    const allBook = await BookModel.find({ $or: [{ StockAvailble: true }, { TotalPages: { $gt: 500 } }] })
    res.send({ msg: allBook })
}


module.exports.newBookData = newBookData
module.exports.getBookData = getBookData
module.exports.getBookInYear = getBookInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBook = getXINRBook
module.exports.getRandomBooks = getRandomBooks
