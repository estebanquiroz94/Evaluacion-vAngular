'use strict'

var mongoose = require('mongoose');
var app = require('./app.js');
var port = process.env.port || 3008;

//Connection DB Instance
mongoose.connect('mongodb://localhost:27017/EvaluacionFinalvAngular',(err, res) => {
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("Conexión a mongo correcta.");
        console.log(port);
        
        //Service Listener
        app.listen(port, function(){
            console.log(`API agenda se está ejecutando en http://localhost:${port}`);
        });
    }
});



