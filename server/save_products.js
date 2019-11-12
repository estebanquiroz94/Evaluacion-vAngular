const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'EvaluacionFinalvAngular';

//Establece la conexión a BD
MongoClient.connect(url, function(err, client){
  if(err)
  {
    console.log(err);
  }
  else
  {
    console.log("Coneccion establecida con la BD");
  }
  //Instancia nombre de BD
  const db = client.db(dbName);

  let coleccion = db.collection("products")

  coleccion.insertMany([{nameProduct: 'Aguacate', image: '../../assets/img/canela.jpg', price: '20', unitsAvailable: "5"},
                        {nameProduct: 'Canela', image: '../../assets/img/tomate.jpg', price: '2', unitsAvailable: "320"},
                        {nameProduct: 'Ajo', image: '../../assets/img/ajo.jpg', price: '5', unitsAvailable: "20"},
                        {nameProduct: 'Almendras', image: '../../assets/img/almendras.jpg', price: '35', unitsAvailable: "800"},
                        {nameProduct: 'Arándanos', image: '../../assets/img/arandanos.jpg', price: '30', unitsAvailable: "500"},
                        {nameProduct: 'Brócoli', image: '../../assets/img/brocoli.png', price: '80', unitsAvailable: "450"},
                        {nameProduct: 'Calabaza', image: '../../assets/img/.calabaza.jpg', price: '100', unitsAvailable: "2"},
                        {nameProduct: 'Cebolla', image: '../../assets/img/cebolla.jpg', price: '20', unitsAvailable: "10"},
                        {nameProduct: 'Fresa', image: '../../assets/img/fresa.jpg', price: '50', unitsAvailable: "40"},
                        {nameProduct: 'Kiwi', image: '../../assets/img/kiwi.jpg', price: '12', unitsAvailable: "27"},
                        {nameProduct: 'Limon', image: '../../assets/img/limon.jpg', price: '90', unitsAvailable: "57"},
                        {nameProduct: 'Lychee', image: '../../assets/img/lychee.jpg', price: '56', unitsAvailable: "29"},
                        {nameProduct: 'Maiz', image: '../../assets/img/maiz.jpg', price: '43', unitsAvailable: "86"},
                        {nameProduct: 'Manzana', image: '../../assets/img/manzana.jpg', price: '98', unitsAvailable: "39"},
                        {nameProduct: 'Naranja', image: '../../assets/img/naranja.jpg', price: '66', unitsAvailable: "147"},
                        {nameProduct: 'Papa', image: '../../assets/img/papa.jpg', price: '99', unitsAvailable: "719"},
                        {nameProduct: 'Pasta', image: '../../assets/img/pasta.jpg', price: '12', unitsAvailable: "234"},
                        {nameProduct: 'Pimienta', image: '../../assets/img/pimienta.jpg', price: '80', unitsAvailable: "561"},
                        {nameProduct: 'Repollo', image: '../../assets/img/repollo.jpg', price: '123', unitsAvailable: "59"},
                        {nameProduct: 'Tomate', image: '../../assets/img/tomate.jpg', price: '77', unitsAvailable: "60"},
                        {nameProduct: 'Zanahoria', image: '../../assets/img/zanahoria.jpg', price: '33', unitsAvailable: "25"}
                        ], (error, result) => {
      console.log('Resultado: ');
      console.log(result)
  });
});