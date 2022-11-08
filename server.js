const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const connectDB = require("./db/mongologic");

// Load models
const { ProductList, Product } = require("./db/models/index.model");

// Load middleware
app.use(bodyParser.json())

/** ROUTE HANDLERS */

/** PRODUCTLIST ROUTES*/

/**
 * GET /productlists
 * Get all lists
 */
app.get("/productlists", (req, res) => {
    ProductList.find({}).then((productLists) => {
        res.send(productLists);
    })
})
/**
 * POST /lists
 * Create a new list
 */
app.post("/productlists", (req, res) => {
    let title = req.body.title;

    let newProductList = new ProductList({
        title
    });

    newProductList.save().then((productListDoc) => {
        res.send(productListDoc);
    })
})
/**
 * GET /lists:id
 * Get a specific list
 */
app.get("/productlists/:id", (req, res) => {
    ProductList.findOne({
        _id: req.params.id
    }).then((listDoc) => {
        res.send(listDoc);
    })
})
/**
 * PATCH /lists:id
 * Update a specific list
 */
app.patch("/productlists/:id", (req, res) => {
    ProductList.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: req.body
    }).then((producListDoc) => {
        res.send(`Product list ${producListDoc.id} updated`)
        // res.send(producListDoc)
    })
})
/**
 * DELETE /lists:id
 * Delete a specific list
 */
app.delete("/productlists/:id", (req, res) => {
    ProductList.findOneAndDelete({
        _id: req.params.id
    }).then((productListDoc) => {
        res.send(productListDoc)
    })
})


/** PRODUCT ROUTES */

/**
 * GET /lists:productListId/products
 * Get products of a specific list
 */
app.get("/productlists/:productListId/products", (req, res) => {
    Product.find({
        _productListId: req.params.productListId
    }).then((productsDoc) => {
        res.send(productsDoc)
    })
})
/**
 * GET /lists:productListId/products/:productId
 * Get a specific product in a specific product list
 */
app.get("/productlists/:productListId/products/:productId", (req, res) => {
    Product.findOne({
        _productListId: req.params.productListId,
        _id: req.params.productId
    }).then((productDoc) => {
        res.send(productDoc)
    })
})
/**
 * POST /lists:productListId/products
 * Create a new product in a specific list
 */
app.post("/productlists/:productListId/products", (req, res) => {
    let newProduct = new Product({
        _productListId: req.params.productListId, 
        title: req.body.title,
        producer: req.body.producer
    })

    newProduct.save().then((productDoc) => {
        res.send(productDoc)
    })
})
/**
 * PATCH /lists:productListId/products:id
 * Update a specific product on a speficic list
 */
app.patch("/productlists/:productListId/products/:productId", (req, res) => {
    Product.findOneAndUpdate({
        _productListId: req.params.productListId,
        _id: req.params.productId
    },{
        $set: req.body
    }).then(() => {
        res.sendStatus(200)
    })

})
/**
 * DELETE /lists:productListId/products:id
 * Delete a specific product on a specific list
 */
app.delete("/productlists/:productListId/products/:productId", (req, res) => {
    Product.findOneAndDelete({
        _productListId: req.params.productListId,
        _id: req.params.productId
    }).then((productDoc) => {
        res.send(`Deleted: ${productDoc}`)
    })
})

/** START APP */
app.listen(port, () => {
    console.log("App's working!")
})
