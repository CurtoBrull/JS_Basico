// Hoisting:  Las variables y las funciones se procesan antes de que se ejecute cualquier código

// JS sabe que dentro de () habrá una variable pero no la tenemos declarada todavía, JS la creará con undefined: var miNombre = undefined;
console.log(miNombre);

// Declarar:
var miNombre;
// Inicializar
miNombre = "Javier";

// Hoisting funcion.

// JS sabe que hey() es una funcion y la envia al principio, luego sigue con bajando y llega a la funcion.
hey();

function hey() {
  console.log("Hola " + miApellido);
}

var miApellido = "Curto";

// Declarar variables al inicio como buena práctica.