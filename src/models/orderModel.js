const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
        
        userId: {type:mongoose.Schema.Types.ObjectId,
                ref:"User"},
        productId: {type:mongoose.Schema.Types.ObjectId,
            ref:"product"},
        amount: Number,
        isFreeAppUser: Boolean, 
        date: String
    }
, { timestamps: true });


module.exports = mongoose.model('order', orderSchema);
