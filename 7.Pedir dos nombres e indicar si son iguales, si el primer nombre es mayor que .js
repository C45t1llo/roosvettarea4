//2Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que 
//el segundo o menor que el segundo-
//Algoritmo CompararNombres
    //Definir nombre1, nombre2 como cadena
    
   // Escribir "Introduce el primer nombre: "
   // Leer nombre1
    
   // Escribir "Introduce el segundo nombre: "
    //Leer nombre2 
    //Si nombre1 = nombre2 Entonces
      //  Escribir "Los nombres son iguales"
    //Sino Si nombre1 > nombre2 Entonces
      //  Escribir "El primer nombre es mayor que el segundo"
    //Sino
    //    Escribir "El primer nombre es menor que el segundo"
  //  FinSi
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function nombre(){
// Solicitar al usuario dos nombres
write("Introduce el primer nombre: ");
let nombre1 = read();

write("Introduce el segundo nombre: ");
let nombre2 = read();

// Comparar los nombres
if (nombre1 === nombre2) {
    write("Los nombres son iguales");
} else if (nombre1 > nombre2) {
    write("El primer nombre es mayor que el segundo");
} else {
    write("El primer nombre es menor que el segundo");
}
}
nombre()