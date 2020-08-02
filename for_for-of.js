var estudiantes = ["María", "Javier", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}
// loop for
for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}
// loop for of
for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}