const mongoose = require("mongoose")

const Product = require ("./model/product")

const option = {
        user: "",
        pass: ""
}

const url = "mongodb://localhost:27017/db_demo?authSource=admin"
mongoose   
    .connect(uri)
    .then(success => console.log("success", success))
    .catch(reason => console.log("error:", reason))

    const newProduct = new Product({name: "Product C", qty: 12})

    newProduct.save().then(console.log).then(console.error)
    console.log("-----")
    Product.find().then