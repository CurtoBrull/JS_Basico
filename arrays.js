var frutas = ["Manzana", "Pera", "Uva", "Plátano"];

console.log(frutas);
console.log(frutas.length); // length nos da la longitud del array
console.log(frutas[3]); // Empieza en 0

var masFrutas = frutas.push("cereza", "melón"); // push añade
console.log(frutas);
console.log(frutas.length);

var ultimo = frutas.pop(""); // pop elimina el último elemento
console.log(frutas);

var nuevaLongitud = frutas.unshift("Melón"); // unshift añade al inicio
console.log(frutas);

var borrarFruta = frutas.shift("Melón"); // shift quita al inicio
console.log(frutas);
console.log(frutas.length);

var posicion = frutas.indexOf("Uva"); // indexOf indica la posición del elemento

console.log(posicion);




