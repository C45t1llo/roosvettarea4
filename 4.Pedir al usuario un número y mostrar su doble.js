//4.	Pedir al usuario un número y mostrar su doble.
//Algoritmo MostrarDobleNumero


	
    // Definir variable para el número
//Definir numero, doble Como Entero
	
    // Solicitar al usuario un número
  //  Escribir "Introduce un número: "
    //Leer numero
	
    // Calcular el doble del número
    //doble <- numero * 2
	
    // Mostrar el doble del número
    //Escribir "El doble de ", numero, " es: ", doble
	
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;

function doble() { 
    let numero = 0, doble = 0;

    numero = parseFloat(read("Introduce el primer número: "));
    
    doble = numero * 2;
	
    write("El doble de " + numero + " es: " + doble);
}

doble();
