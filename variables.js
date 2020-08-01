//Scope Global

var miNombre = "Javier";

// Declarar

var edad;

// Inicializar

edad = 41;

var elementos = ["Computadora", "Celular"];

var persona = {
  nombre: "Javier",
  edad: 41
}

// Scope local

function nombre() {
  var miApellido = "Curto";
  console.log(miNombre + " " + miApellido)
}

nombre(); // Usará el scope global y el local de la funcion para sacar el resultado completo

miApellido(); // En local no podrá sacar el resultado