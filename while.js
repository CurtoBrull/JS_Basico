var estudiantes = ["María", "Izhan", "Javier", "Iris"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}.`);
}

while (estudiantes.length > 0) {
  console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}