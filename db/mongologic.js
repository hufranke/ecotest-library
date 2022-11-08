/**
 * This file handles the connection to the mongoDB database
 */

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/oekotest").then(() => {
    console.log("MongoDB connected")
}).catch((e) => {
    console.log(e)
});

// mongoose.set("useCreateIndex", true)
// mongoose.set("useFindAndModify", false)

module.exports = { mongoose };