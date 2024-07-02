//2.	Solicitar al usuario una distancia en metros y mostrarla en centímetros.
//Algoritmo ConvertirMetrosACentimetros
	
    // Definir variables para la distancia en metros y centímetros
//Definir metros, centimetros como real
	
    // Solicitar al usuario la distancia en metros
  //  Escribir "Introduce la distancia en metros: "
   // Leer metros
	
    // Convertir la distancia de metros a centímetros
    //centimetros <- metros * 100
	
    // Mostrar la distancia en centímetros
    //Escribir "La distancia en centímetros es: ", centimetros
	
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
 function metros(){
let  metros=0, centimetros=0; 
	
metros = parseFloat(read("Introduce la  distancia en metros: "));


	

    centimetros = metros * 100
	
    
    write( "La distancia en centímetros es: ", centimetros)
 }
    metros()
