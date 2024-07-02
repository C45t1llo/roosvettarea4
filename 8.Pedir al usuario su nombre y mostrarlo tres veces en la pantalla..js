// 8.	Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
//Algoritmo MostrarNombreTresVeces
	//definir nombre Como Caracter
    // Solicitar al usuario su nombre
    //Escribir "Por favor, introduce tu nombre: "
    //Leer nombre
	
    // Mostrar el nombre tres veces
    //Escribir nombre
    //Escribir nombre
  //  Escribir nombre
	
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function nombre(){ 
	let  nombre ="";
    
    nombre = read( "Por favor, introduce tu nombre: ")

	

    write(nombre)
    write (nombre)
    write( nombre)
}
nombre()

