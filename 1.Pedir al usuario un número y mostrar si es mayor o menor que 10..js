//1.	Pedir al usuario un número y mostrar si es mayor o menor que 10.
//Algoritmo CompararNumero
//Definir numero como entero
    
//Escribir "Introduce un número: "
//Leer numero

//Si numero > 10 Entonces
  //  Escribir "El número es mayor que 10"
//Sino
  //  Si numero < 10 Entonces
     //   Escribir "El número es menor que 10"
   // Sino
       // Escribir "El número es igual a 10"
    //FinSi
//FinSi
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;

let numero;
 function menormayorigual(){ 
write("Introduce un número: ");
numero = parseInt(read());

if (numero > 10) {
    write("El número es mayor que 10");
} else if (numero < 10) {
    write("El número es menor que 10");
} else {
    write("El número es igual a 10");
}
 }
 menormayorigual()