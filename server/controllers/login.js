'use strict'

//Importing user model
var user = require('../models/user');

 function authenticateUser(req, res){
    console.log('Start authenticateUser');
    console.log(req.body);
    
    //get data sended
    let userLogin = req.body.email;
    let passLogin = req.body.pass;

    var answer = "Denegated";
console.log(userLogin);
console.log(passLogin);
console.log('antes de buscar');
console.log('Ejecución');
    user.find({email: userLogin, password: passLogin}), function(err, userFound){
        console.log(err);
        
        if(err){
            console.log('An error ocurred')
            res.status(500).send({message: 'Error en la petición'})
        }else{
            console.log(userFound);
            
            if(!usuario){
                res.status(404).send({message: 'Can not found user'})
            }
            if(userFound.length>0){
                answer = 'validated';
            }

            res.status(200).send(answer);
        }
    }
 }
 
 module.exports = {authenticateUser}
