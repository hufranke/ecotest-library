const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    _catId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    title: { 
        type: String, 
        required: true,
        minlength: 1, 
        trim: true
    },
    provider: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    price: { type: mongoose.Decimal128 },
    rating: { type: String }
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = {Product};