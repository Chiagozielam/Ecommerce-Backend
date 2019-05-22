const mongoose = require('mongoose');

const maleShoeSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productImg: {
        type: String,
        required: true
    },
    path: {
        type: String,
        require: false
    }
    
})

const maleShoe = mongoose.model("maleShoes", maleShoeSchema);

module.exports = maleShoe;
