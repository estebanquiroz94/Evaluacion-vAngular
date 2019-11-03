'use strict'

var express = require('express');
var productsController = require('../controllers/products.js');
var api = express.Router();

console.log('Instance function Products');

api.get('/getAllProducts',productsController.getAllProducts)

module.exports = api;
