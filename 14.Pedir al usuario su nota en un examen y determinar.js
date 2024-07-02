// 6.	Pedir al usuario su nota en un examen y determinar
// si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
//Algoritmo DeterminarAprobacion
   // Definir nota como entero
    
    //Escribir "Introduce tu nota en el examen: "
    //Leer nota
    
   // Si nota >= 60 Entonces
      //  Escribir "¡Felicidades! Has aprobado el examen."
    //Sino
    //    Escribir "Lo siento, has reprobado el examen."
  //  FinSi
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function examen(){ 
write("Introduce tu nota en el examen: ");
let nota = parseInt(read());

if (nota >= 60) {
    write("¡Felicidades! Has aprobado el examen.");
} else {
    write("Lo siento, has reprobado el examen.");
}
}
examen()