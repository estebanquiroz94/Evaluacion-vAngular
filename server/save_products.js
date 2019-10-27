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

  coleccion.insertMany([{nameProduct: 'Aguacate', image: '', price: '20', unitsAvailable: 5},
                        {nameProduct: 'Canela', image: '', price: '2', unitsAvailable: 320},
                        {nameProduct: 'Ajo', image: '', price: '5', unitsAvailable: 20},
                        {nameProduct: 'Almendras', image: '', price: '35', unitsAvailable: 800},
                        {nameProduct: 'Arándanos', image: '', price: '30', unitsAvailable: 500},
                        {nameProduct: 'Brócoli', image: '', price: '80', unitsAvailable: 450},
                        {nameProduct: 'Calabaza', image: '', price: '100', unitsAvailable: 2},
                        {nameProduct: 'Cebolla', image: '', price: '20', unitsAvailable: 10},
                        {nameProduct: 'Fresa', image: '', price: '50', unitsAvailable: 40},
                        {nameProduct: 'Kiwi', image: '', price: '12', unitsAvailable: 27},
                        {nameProduct: 'Limon', image: '', price: '90', unitsAvailable: 57},
                        {nameProduct: 'Lychee', image: '', price: '56', unitsAvailable: 29},
                        {nameProduct: 'Maiz', image: '', price: '43', unitsAvailable: 86},
                        {nameProduct: 'Manzana', image: '', price: '98', unitsAvailable: 39},
                        {nameProduct: 'Naranja', image: '', price: '66', unitsAvailable: 147},
                        {nameProduct: 'Papa', image: '', price: '99', unitsAvailable: 719},
                        {nameProduct: 'Pasta', image: '', price: '12', unitsAvailable: 234},
                        {nameProduct: 'Pimienta', image: '', price: '80', unitsAvailable: 561},
                        {nameProduct: 'Repollo', image: '', price: '123', unitsAvailable: 59},
                        {nameProduct: 'Tomate', image: '', price: '77', unitsAvailable: 60},
                        {nameProduct: 'Zanahoria', image: '', price: '33', unitsAvailable: 25}
                        ], (error, result) => {
      console.log('Resultado: ');
      console.log(result)
  });
});