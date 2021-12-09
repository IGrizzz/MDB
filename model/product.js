const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    qty: {
        type: Number
    },
    description: {
        type: String
    },
    user_email : {
        type: String
    }
})

const ProductModel = mongoose.model('Product', productSchema)
module.exports = ProductModel