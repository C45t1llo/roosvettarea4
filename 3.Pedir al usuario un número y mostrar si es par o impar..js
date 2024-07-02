//3.	Pedir al usuario un número y mostrar si es par o impar.
// Algoritmo ParOImpar
//Definir numero como entero
    
//Escribir "Introduce un número: "
//Leer numero

//Si numero MOD 2 = 0 Entonces
  //  Escribir "El número es par"
//Sino
  //  Escribir "El número es impar"
//FinSi
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;

function parimpar(){
// Definir la variable para almacenar el número
let numero;

// Solicitar al usuario un número
write("Introduce un número: ");
numero = parseInt(read());

// Verificar si el número es par o impar
if (numero % 2 === 0) {
    write("El número es par");
} else {
    write("El número es impar");
}
}
parimpar()