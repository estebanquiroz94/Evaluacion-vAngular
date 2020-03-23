'use strict'

//Import user model

var product = require('../models/product');
var ShopCar = require('../models/shopCar');

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
                    res.status(404).send({answerPetiton: 'Can not found products'})
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
    console.log(req.body);
    
    ShopCar.create(req.body, function (err, product) {
        if(err){
            res.status(500).send({message:"Fail Peticion."});
        }
        else{
            if(!product){
                res.status(404).send({message:"Don't add product"});
            }
            else{
              console.log('ok add product');
                res.status(200).send(
                  {
                    answer: "ok",
                    id:product._id
                  });
            }
        }
      });
}

function getProductsByUser(req, res){
    try {
        console.log(req.query.user);      
        console.log('Start Get By User');
        
        ShopCar.find({ user:  req.query.user},function(err,productsFound)
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
                    res.status(404).send({answerPetiton: 'Can not found products by user'})
                }
            }  
            console.log('Before Return');
            res.status(200).send(productsFound)
    
        });

    } catch (error) {
        console.log(error);
    }
}

// function getProductById(id){
//     try {
//         console.log('entró');
//         console.log(req.query.user);
        
//         getProductById(req.body._id)

//         console.log('Start Get By User');
//         ShopCar.find({ user:  req.query.user},function(err,productsFound)
//         {
//             //Validation for error
//             if(err)
//             {
//                 console.log('An error ocurred');
//                 res.status(500).send({answerPetiton: 'Error en la petición'})
//             }
//             else
//             {
//                 //User not found
//                 if(!productsFound)
//                 {
//                     console.log('Not Found');
//                     res.status(404).send({answerPetiton: 'Can not found products by user'})
//                 }
//             }  
//             console.log('Before Return');
//             res.status(200).send(productsFound)
    
//         });

//     } catch (error) {
//         console.log(error);
//     }
// }

function DeleteTemporalByUser(req, res){
    try {
        console.log('Start DeleteTemporalByUser');
        
        ShopCar.deleteMany({ user:  "jq@gmail.com"}, function(err, response){
            console.log(response);
            
            if(err){
               console.log('an error ocurred');
               
                res.status(500).send({answer:"fail"});
              }
              else{
                console.log('Delete succes');
                
                res.status(200).send({answer: 'ok'});
              }
        });

    } catch (error) {
        res.status(200).send({answer: error});
    }
}
module.exports = {getAllProducts, SaveTemporalByUser, getProductsByUser, DeleteTemporalByUser}