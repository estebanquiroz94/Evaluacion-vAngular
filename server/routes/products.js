'use strict'

var express = require('express');
var productsController = require('../controllers/products.js');
var api = express.Router();

console.log('Instance function Products');

api.get('/products/getAllProducts',productsController.getAllProducts)
api.post('/products/saveTemporalByUser',productsController.SaveTemporalByUser)

module.exports = api;
