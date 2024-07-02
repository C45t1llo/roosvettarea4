// 9.	Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
//Algoritmo TablaDeMultiplicar
	
    // Definir variable para el número
//Definir numerox Como Entero
	
    // Solicitar al usuario un número
  //  Escribir "Introduce un número: "
    //Leer numerox
	
    // Mostrar la tabla de multiplicar del número del 1 al 10
    //Escribir "Tabla de multiplicar del ", numerox, ":"
    //Para i <- 1 Hasta 10 Hacer
      //  Escribir numero, " x ", i, " = ", numerox * i
    //FinPara
	
//FinAlgoritmo

  
const read = require('prompt-sync')();
const write = console.log;

function tablaDeMultiplicar() { 
    let numero = 0;

    numero = parseFloat(read("Dame un número de la tabla de multiplicar del uno hasta el 10: "));
    
    write("Tabla de multiplicar del " + numero + ":");

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        write(numero + " x " + i + " = " + resultado);
    }
}

tablaDeMultiplicar();
