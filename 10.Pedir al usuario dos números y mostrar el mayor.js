// 1.	Pedir al usuario dos números y mostrar el mayor.

//Algoritmo MostrarMayor
	
    // Definir variables para los números
//Definir numero1, numero2 como entero
	
    // Solicitar al usuario el primer número
  //  Escribir "Introduce el primer número: "
//    Leer numero1
	
    // Solicitar al usuario el segundo número
  //  Escribir "Introduce el segundo número: "
    //Leer numero2
	
    // Determinar el mayor de los dos números
   // Si numero1 > numero2 Entonces
     //   Escribir "El mayor número es: ", numero1
    //Sino
      //  Si numero2 > numero1 Entonces
        //    Escribir "El mayor número es: ", numero2
        //Sino
          //  Escribir "Ambos números son iguales."
       // FinSi
    //FinSi
	
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
 function iguales() { 
let numero1 = 0, numero2 = 0; 
	
numero1 = parseFloat(read("Introduce el primer número: "));
numero2 = parseFloat(read("Introduce el segundo número: "));

if (numero1 > numero2) {
    write("El mayor número es: ", numero1);
} else if (numero2 > numero1) {
    write("El mayor número es: ", numero2);
} else {
    write("Ambos números son iguales.");
}
 }
 iguales()