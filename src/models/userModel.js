const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    BookName: String,
    
    AuthurName:  String,
     
    Category: String,
      
    Year: Number
    },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
