var miAuto = {
  marca: "Reanult",
  modelo: "Kangoo",
  anno: 2015,
  detalleDelAuto: function () {
    // this es una variable que hace referencia a un objeto padre
    console.log(`Auto ${this.modelo} ${this.anno}`)
  } 
};

// Para traer valores del objeto poner el nombre despues de un .
console.log(miAuto.marca);
console.log(miAuto.anno);
console.log(miAuto.detalleDelAuto());



