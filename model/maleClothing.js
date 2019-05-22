const mongoose = require('mongoose');

const maleClothingSchema = new mongoose.Schema({
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

const maleClothing = mongoose.model("maleClothings", maleClothingSchema);

module.exports = maleClothing;
