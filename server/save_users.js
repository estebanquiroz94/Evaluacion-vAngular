const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'EvaluacionFinalvAngular2';

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
    {email: "jq@gmail.com", nombre:"Juan", password: "juanchito25", fechaNacimiento:"2000/07/15"},
    {email: "valeria@gmail.com", nombre:"Valeria ", password: "vale123", fechaNacimiento:"1994/07/20"},
    {email: "ddaniela@gmail.com", nombre:"Daniela", password: "danidani", fechaNacimiento:"1989/07/15"},
  ], (error, result) => {
      console.log('Resultado: ');
      
    console.log(result)
  });
});