//5.	Pedir al usuario dos números y mostrar si son iguales o diferentes.
//Algoritmo CompararNumeros
    //Definir numero1, numero2 como entero
    
    //Escribir "Introduce el primer número: "
  //  Leer numero1
    
    //Escribir "Introduce el segundo número: "
    //Leer numero2
    
    //Si numero1 = numero2 Entonces
     //   Escribir "Los números son iguales"
   // Sino
    //    Escribir "Los números son diferentes"
  //  FinSi
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function iguales(){ 
// Solicitar al usuario dos números
write("Introduce el primer número: ");
let numero1 = parseFloat(read());

write("Introduce el segundo número: ");
let numero2 = parseFloat(read());

// Verificar si los números son iguales o diferentes
if (numero1 === numero2) {
    write("Los números son iguales");
} else {
    write("Los números son diferentes");
}
}
iguales()