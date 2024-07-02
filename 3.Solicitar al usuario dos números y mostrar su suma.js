//3.Solicitar al usuario dos números y mostrar su suma.
//Algoritmo SumaDosNumeros
	
    // Definir variables para los números
//Definir numero1, numero2, suma como  entero
	
    // Solicitar al usuario el primer número
  //  Escribir "Introduce el primer número: "
    //Leer numero1
	
    // Solicitar al usuario el segundo número
    //Escribir "Introduce el segundo número: "
   // Leer numero2
	
    // Calcular la suma
//    suma <- numero1 + numero2
	
    // Mostrar la suma
  //  Escribir "La suma de ", numero1, " y ", numero2, " es: ", suma
	
//FinAlgoritmo

// Definir variables para los números
const read = require('prompt-sync')();
const write = console.log;

function suma() { 
    let numero1 = 0, numero2 = 0, suma = 0;

    numero1 = parseFloat(read("Introduce el primer número: "));
    numero2 = parseFloat(read("Introduce el segundo número: "));
    suma = numero1 + numero2;

    write("La suma de " + numero1 + " y " + numero2 + " es: " + suma);
}

suma();
