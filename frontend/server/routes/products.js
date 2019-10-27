'use strict'

var express = require('express');
var productsController = require('../controllers/products.js');
var api = express.Router();

console.log('Instance Products');

api.get('/getProducts')
