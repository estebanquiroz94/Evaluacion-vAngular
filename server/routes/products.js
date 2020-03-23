'use strict'

var express = require('express');
var productsController = require('../controllers/products.js');
var api = express.Router();

console.log('Instance function Products');

api.get('/products/getAllProducts',productsController.getAllProducts)
api.post('/products/saveTemporalByUser',productsController.SaveTemporalByUser)
api.get('/products/getProductsByUser',productsController.getProductsByUser)
api.post('/products/DeleteTemporalByUser',productsController.DeleteTemporalByUser)

module.exports = api;
