// Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
//Algoritmo CompararNumero
    //Definir numero como entero
    
   /// Escribir "Introduce un número: "
    //Leer numero
    
    //Si numero > 100 Entonces
      //  Escribir "El número es mayor que 100"
    //Sino Si numero < 100 Entonces
     //  Escribir "El número es menor que 100"
    //Sino
    //    Escribir "El número es igual a 100"
  //  FinSi
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function numero(){
write("Introduce un número: ");
let numero = parseInt(read());

if (numero > 100) {
    write("El número es mayor que 100");
} else if (numero < 100) {
    write("El número es menor que 100");
} else {
    write("El número es igual a 100");
}
}
numero()