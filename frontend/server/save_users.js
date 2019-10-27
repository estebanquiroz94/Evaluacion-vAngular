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

  let coleccion = db.collection("users")

  coleccion.insertMany([
    {email: "jq@gmail.com", name:"Juan", password: "123"},
    {email: "valeria@gmail.com", name:"Valeria ", password: "567"},
    {email: "ddaniela@gmail.com", name:"Daniela", password: "098"},
  ], (error, result) => {
      console.log('Resultado: ');
      console.log(result)
  });
});