const mongoose = require('mongoose');

const femaleDressSchema = new mongoose.Schema({
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

const femaleDress = mongoose.model("femaleDresses", femaleDressSchema);

module.exports = femaleDress;

