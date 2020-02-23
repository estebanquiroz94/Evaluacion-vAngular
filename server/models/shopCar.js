'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var shopCarSchema = schema({
    nameProduct: String,
    image: String,
    price: String,
    user: String,
    quantity: String
})

module.exports = mongoose.model('shopCar', shopCarSchema);