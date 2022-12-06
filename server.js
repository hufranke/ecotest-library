const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const port = 5000;
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

const connectDB = require("./db/mongologic");

// Load models
const { Category, Product } = require("./db/models/index.model");

// Load middleware
app.use(bodyParser.json())
app.use(cors())
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
//  });

/** ROUTE HANDLERS */

/** CATEGORY ROUTES*/

/**
 * GET /cats
 * Get all lists
 */
app.get("/cats", (req, res) => {
    Category.find({}).then((cats) => {
        res.send(cats);
    })
})
/**
 * POST /lists
 * Create a new list
 */
app.post("/cats", (req, res) => {
    let title = req.body.title;

    let newCat = new Category({
        title
    });

    newCat.save().then((catDoc) => {
        res.send(catDoc);
    })
})
/**
 * GET /lists:id
 * Get a specific list
 */
app.get("/cats/:id", (req, res) => {
    Category.findOne({
        _id: req.params.id
    }).then((catDoc) => {
        res.send(catDoc);
    })
})
/**
 * PATCH /lists:id
 * Update a specific list
 */
app.patch("/cats/:id", (req, res) => {
    Category.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: req.body
    }).then((catsDoc) => {
        res.send(`Product list ${catsDoc.id} updated`)
        // res.send(producListDoc)
    })
})
/**
 * DELETE /lists:id
 * Delete a specific list
 */
app.delete("/cats/:id", (req, res) => {
    Category.findOneAndDelete({
        _id: req.params.id
    }).then((catsDoc) => {
        // res.send(catsDoc)
        res.sendStatus(200)
    })
})


/** PRODUCT ROUTES */

/**
 * GET /cats:catId/products
 * Get products of a specific list
 */
app.get("/cats/:catId/products", (req, res) => {
    Product.find({
        _catId: req.params.catId
    }).then((productsDoc) => {
        res.send(productsDoc)
    })
})
/**
 * GET /cats:catId/products/:productId
 * Get a specific product in a specific product list
 */
app.get("/cats/:catId/products/:productId", (req, res) => {
    Product.findOne({
        _catId: req.params.catId,
        _id: req.params.productId
    }).then((productDoc) => {
        res.send(productDoc)
    })
})
/**
 * POST /cats:catId/products
 * Create a new product in a specific list
 */
app.post("/cats/:catId/products", (req, res) => {
    let newProduct = new Product({
        _catId: req.params.catId, 
        title: req.body.title,
        provider: req.body.provider
    })

    newProduct.save().then((productDoc) => {
        res.send(productDoc)
    })
})
/**
 * PATCH /cats:catId/products:id
 * Update a specific product on a speficic list
 */
app.patch("/cats/:catId/products/:productId", (req, res) => {
    Product.findOneAndUpdate({
        _catId: req.params.catId,
        _id: req.params.productId
    },{
        $set: req.body
    }).then(() => {
        res.sendStatus(200)
    })

})
/**
 * DELETE /cats:catId/products:id
 * Delete a specific product on a specific list
 */
app.delete("/cats/:catId/products/:productId", (req, res) => {
    Product.findOneAndDelete({
        _catId: req.params.catId,
        _id: req.params.productId
    }).then((productDoc) => {
        res.send(`Deleted: ${productDoc}`)
    })
})

/** START APP */
app.listen(port, () => {
    console.log("App's working!")
})
