// 7.	Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
//Algoritmo CelsiusAFahrenheit
	
    // Definir variables para la temperatura en Celsius y Fahrenheit
//Definir celsius, fahrenheit como  real
	
    // Solicitar al usuario la temperatura en grados Celsius
   // Escribir "Introduce la temperatura en grados Celsius: "
    //Leer celsius
	
    // Convertir la temperatura de Celsius a Fahrenheit
    //fahrenheit <- (celsius * 9/5) + 32
	
    // Mostrar la temperatura en grados Fahrenheit
  //  Escribir "La temperatura en grados Fahrenheit es: ", fahrenheit
	
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;

function Celsius() { 
    let celsius = 0, fahrenheit = 0;	
 
    celsius = parseFloat(read("Introduce la temperatura en grados Celsius: "));
    
    fahrenheit = (celsius * 9/5) + 32;
    
    write("La temperatura en grados Fahrenheit es: ", fahrenheit);
}

Celsius();
