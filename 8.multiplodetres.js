
//Algoritmo MultiploDeTres
//Definir numero como entero
    
//Escribir "Introduce un número: "
//Leer numero

//Si numero MOD 3 = 0 Entonces
  //  Escribir "El número es múltiplo de 3"
//Sino
  //  Escribir "El número no es múltiplo de 3"
//FinSi
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;
function MultiploDeTres(){
// Solicitar al usuario un número
write("Introduce un número: ");
let numero = parseInt(read());

// Verificar si el número es múltiplo de 3
if (numero % 3 === 0) {
    write("El número es múltiplo de 3");
} else {
    write("El número no es múltiplo de 3");
}
}
MultiploDeTres()