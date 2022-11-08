const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    _productListId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    title: { 
        type: String, 
        required: true,
        minlength: 1, 
        trim: true
    },
    producer: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    year: { type: Number },
    vendor: { type: String },
    price: { type: Number },
    rating: { type: String }
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = {Product};