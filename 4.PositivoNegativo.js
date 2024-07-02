// Algoritmo PositivoNegativo
//Definir numero como entero
    
//Escribir "Introduce un número: "
//Leer numero

//Si numero > 0 Entonces
  //  Escribir "El número es positivo"
//Sino Si numero < 0 Entonces
   // Escribir "El número es negativo"
//Sino
  //  Escribir "El número es cero"
//FinSi
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function PositivoNegativo(){ 

let numero;

write("Introduce un número: ");
numero = parseInt(read());

if (numero > 0) {
    write("El número es positivo");
} else if (numero < 0) {
    write("El número es negativo");
} else {
    write("El número es cero");
}
}
PositivoNegativo()