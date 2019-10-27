'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = schema({
    nombre: String,
    email: String, 
    password: String
});

module.exports = mongoose.model('users', userSchema);