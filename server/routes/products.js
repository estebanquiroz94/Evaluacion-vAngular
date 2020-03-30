'use strict'

var express = require('express');
var productsController = require('../controllers/products.js');
var api = express.Router();

console.log('Instance function Products');

api.get('/products/getAllProducts',productsController.getAllProducts)
api.post('/products/saveTemporalByUser',productsController.SaveTemporalByUser)
api.get('/products/getProductsByUser',productsController.getProductsByUser)
api.post('/products/DeleteTemporalByUser',productsController.DeleteTemporalByUser)
api.post('/products/BuyByUser',productsController.BuyByUser)

module.exports = api;
