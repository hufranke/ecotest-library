const mongoose = require("mongoose");

const ProductListSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    year: { type: Number }
})

const ProductList = mongoose.model("ProductList", ProductListSchema)

module.exports = {ProductList};