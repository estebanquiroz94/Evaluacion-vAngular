'use strict'

//Import user model

var product = require('../models/product');

function getAllProducts(){
    try {
        console.log('Start Get All');
        
        product.find(err, productsFound)
        {
            //Validation for error
            if(err)
            {
                console.log('An error ocurred');
                res.status(500).send({answerPetiton: 'Error en la petición'})
            }
            else
            {
                //User not found
                if(!userFound)
                {
                    res.status(404).send({answerPetiton: 'Can not found user'})
                }
            }       
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getAllProducts}