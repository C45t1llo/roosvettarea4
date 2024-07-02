// 5.	Solicitar al usuario su edad 
// mostrar un mensaje indicando cuántos años tendrá en el próximo año.
//Algoritmo EdadProximoAnio
	
    // Definir variable para la edad
//Definir edad como  entero
	
    // Solicitar al usuario su edad
  //  Escribir "Por favor, introduce tu edad: "
    //Leer edad
	
    // Calcular la edad en el próximo año
//Definir edad_proximo_anio como  entero
  //  edad_proximo_anio <- edad + 1
	
    // Mostrar el mensaje con la edad en el próximo año
    //Escribir "Tendrás ", edad_proximo_anio, " años en el próximo año."
	
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function edad() { 
    let edad = 0;
    edad = parseFloat(read("Introduce tu edad : "));

    let edad_numero = parseInt(edad);
    
    let edad_proximo_anio = edad_numero + 1;
   
    write("Tendrás " + edad_proximo_anio + " años en el próximo año.");
}

edad();
