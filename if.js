// Dentro de () debe ser algo verdadero para que la funcion realice la tarea.
// Si no es true necesitamos el else si queremos utilizar la funcion

if (true) {
	console.log("hola");
} else {
	console.log("Soy falso");
}

var edad = 18;

if (edad === 18) {
	console.log("Puedes votar, será tu primera votación");
} else if (edad > 18) {
	console.log("Puedes votar");
} else {
	console.log("No puedes votar");
}

// Ternario
// condicion ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Soy un 1" : "No soy un 1";

console.log(resultado);

// Reto piedra papel tijera
// Piedra > papel
// tijera > papel
// Piedra > tijera

var eleccion1 = "Piedra";
var eleccion2 = "Papel";
var eleccion3 = "Tijera";

var resultado = function (jugador1, jugador2) {
	if (jugador1 != jugador2) {
		if (jugador1 == eleccion2 && jugador2 && eleccion1) {
			console.log("Jugador 1 gana con " + eleccion2);
		} else if (jugador1 == eleccion3 && jugador2 && eleccion2) {
			console.log("Jugador 1 gana con " + eleccion3);
		} else if (jugador1 == eleccion1 && jugador2 && eleccion3) {
			console.log("Jugador 1 gana con " + eleccion1);
		} else {
			console.log("Jugador 2 gana");
		}
	} else if (jugador1 === jugador2) {
		console.log("Empate");
	}
};

resultado();
