'use strict'

//Import user model

var product = require('../models/product');
var shopCar = require('../models/shopCar');

function getAllProducts(req, res){
    try {
        console.log('Start Get All');
        
        product.find(function(err, productsFound)
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
                if(!productsFound)
                {
                    console.log('Not Found');
                    res.status(404).send({answerPetiton: 'Can not found user'})
                }
            }  
            console.log('Before Return');
            res.status(200).send(productsFound)
    
        });

    } catch (error) {
        console.log(error);
    }
}

function SaveTemporalByUser(req, res){
    console.log('va guardar alguna mierda');
    
    res.status(200).send(true);
}

module.exports = {getAllProducts, SaveTemporalByUser}