'use strict'

var mongoose = require('mongoose');
var app = require('./app.js');
var port = process.env.port || 3008;

mongoose.connect('mongodb://localhost:27017/EvaluacionFinalvAngular',(err, res) => {
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("Conexión a mongo correcta.");
        console.log(port);
        
        app.listen(port, function(){
            console.log(`API agenda se está ejecutando en http://localhost:${port}`);
        });
    }
});



