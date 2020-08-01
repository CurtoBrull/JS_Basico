// Coerción implícita

var a = 4 + "7";
typeof a; // string

var b = 4 * "7";
typeof b; // number, * es un operador numérico a diferencia de + que puede servir para concatenar.

// Coerción explícita

var a = 20;
var b = a + "";

var c = String(a); // Convierte un tipo en el que elegimos, string en este caso.

var d = Number(c); // Convierte C a Número

