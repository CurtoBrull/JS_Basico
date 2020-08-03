var articulos = [
  {nombre: "Bici", costo: 3000},
  {nombre: "TV", costo: 2500},
  {nombre: "Libro", costo: 250},
  {nombre: "Teléfono", costo: 10000},
  {nombre: "Portátil", costo: 20000},
  {nombre: "Teclado", costo: 500},
  {nombre: "Auriculares", costo: 1500},
];

// Filter =  Filtramos cosas específicas en los objetos generando un nuevo array con esos datos
var articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <= 500;
});

// Map =  mapeamos todo el contenido y podemos crear un nuevo array con lo seleccionado.
var nombreArticulos = articulos.map(function(articulo){
  return articulo.nombre;
})

console.log(articulosFiltrados);
console.log(nombreArticulos);
