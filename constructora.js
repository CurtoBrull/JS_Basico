function auto(marca, modelo, anno) {
  this.marca = marca;
  this.modelo = modelo;
  this.anno = anno;
}
var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model x", 2019);
var autoNuevo3 = new auto("Renault", "Kangoo", 2015);
var autoNuevo4 = new auto("Toyota", "Corola", 2007);

console.log(autoNuevo3);

function coche(marcas, modelos, annos) {
  this.marcas = marcas;
  this.modelos = modelos;
  this.annos = annos;
}
var cantidad = prompt("¿Cuántos vehículos deseas guardar?");
var numero = 1;
var vehiculos = [];
for (let i = 0; i < cantidad; i++) {
  const marcas = prompt("Ingresa la marca del vehículo número "+ numero++);
  var numero2 = numero - 1;
  const modelos = prompt("Ingresa el modelo del vehículo número "+ numero2);
  const annos = prompt("Ingresa el año del vehículo número "+ numero2);
  vehiculos.push(new coche (marcas, modelos, annos));  
}
for (let i = 0; i < vehiculos.length; i++) {
  console.log(vehiculos[i]);  
}