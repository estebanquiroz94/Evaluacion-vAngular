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

async function SaveTemporalByUser(req, res){
    console.log('Start SaveTemporalByUser');
    console.log(req.body);
    
    //Validate if product is avaliable
    var product = await getProductById(req.body._id)   

    if(product.unitsAvailable >= req.body.quantity)
    {
        console.log('debe guardar');
        
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
    }else
    {
        res.status(200).send(
            {
                answer:"notavailable",
                unitsAvailable: availableUnits
            }
        )
    }
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

async function getProductById(id, res){
    try {
            var result = await product.findById({ _id:  id}).exec()            
            return result;

    } catch (error) {
        console.log(error);
    }
}

function DeleteTemporalByUser(req, res){
    try {

        console.log('Start DeleteTemporalByUser');

        ShopCar.deleteMany({ user:  req.body.user}, function(err, response){
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

async function UpdateUnitsAvailables(req, res){
    //Actualiza las unidades disponibles en el inventario
    try {
        await product.updateOne({_id: req._id}, {unitsAvailable: req.unitsAvailable})
    } catch (error) {
        
    }
}

async function BuyByUser(req, res){

    console.log('inicia BuyByUser');
    console.log(req.body.user);
    
    try {
        var productsByUser = await ShopCar.find({ user:  req.body.user}).exec()            
        
        //Validate each elemet available
        productsByUser.forEach( async (element) => {

            var product = await getProductById(element._id);
            
            //Se  verifica que la cantidad actual, sea mayor o igual a la que se va vender
            if(product.unitsAvailable >= element.quantity){
                console.log('validó');
                let unitsAvailable = product.unitsAvailable - element.quantity;
                let update = {
                    _id:element._id,
                    unitsAvailable: unitsAvailable
                }
                
                await UpdateUnitsAvailables(update);
                
            }else
            {
                res.status(200).send(
                {
                        answer:"bad",
                        message: "Cantidades insuficientes en inventario"
                });
            }

        });

        res.status(200).send(
            {
                    answer:"ok",
                    message: "Proceso ejecutado con éxito"
            });

    } catch (error) {
        
    }
}
module.exports = {getAllProducts, SaveTemporalByUser, getProductsByUser, DeleteTemporalByUser, BuyByUser}