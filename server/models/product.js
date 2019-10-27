'use strinct'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var productSchema = schema({
    nameProduct: String,
    image: String,
    price: String,
    unitsAvaliable: String
})

module.exports = mongoose.model('product', productSchema);