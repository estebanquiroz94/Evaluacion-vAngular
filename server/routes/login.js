'use strict'

var express = require('express'); 
var loginController = require('../controllers/login.js')
var api = express.Router();

console.log('Instance function authenticateUser');

api.post('/login', loginController.authenticateUser)

module.exports = api;