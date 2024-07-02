//1.	Pedir al usuario su nombre y saludarlo.
//Algoritmo saludo
	
//	Definir nombre Como Caracter
		
		// Pedir al usuario su nombre
//		Escribir "Por favor, introduce tu nombre: ";
//		Leer nombre
		

//		Escribir "¡Hola, ", nombre, "! Bienvenido.";
		
//FinAlgoritmo




const read = require('prompt-sync')();
const write = console.log
// se crea la funcion
function Saludar(){
  
	let  nombre="" ,Saludar=""
		nombre = read ("Por favor, introduce tu nombre: ")
		write("¡Hola, ", nombre, "! Como estas.")

}
Saludar()
