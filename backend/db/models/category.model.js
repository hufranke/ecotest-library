const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    year: { type: Number }
})

const Category = mongoose.model("Category", CategorySchema)

module.exports = {Category};