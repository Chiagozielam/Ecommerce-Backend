const mongoose = require('mongoose');

const femaleShoeSchema = new mongoose.Schema({
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

const femaleShoe = mongoose.model("femaleShoes", femaleShoeSchema);

module.exports = femaleShoe;
