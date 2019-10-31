'use strict'

//Importing user model
var user = require('../models/user');

function authenticateUser(req, res){
    try {

    console.log('Start authenticateUser');

    //get data sended
    let userLogin = req.body.email;
    let passLogin = req.body.pass;

    var answer = "Denegated";

        //Search the user login
        user.find({email: userLogin, password: passLogin}, function(err, userFound)
        {
            //Validation for error
            if(err)
            {
                console.log('An error ocurred');
                res.status(500).send({answerPetiton: 'Error en la petición'})
            }
            else
            {
                console.log('Bad User Autenticated');
                
                //User not found
                if(!userFound){
                res.status(404).send({answerPetiton: 'Can not found user'})
            }

            //Validate if found user
            if(userFound.length > 0){            
                answer = 'validated';
                console.log('User Succesfull');
                
            }
            
            //Generate response validate login
            res.status(200).send({answerPetition:answer});                
            }
        }).count();
        
    } catch (error) {
        console.log(error);
    }
}
module.exports = {authenticateUser}
