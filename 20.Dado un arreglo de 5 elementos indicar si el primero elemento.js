//Dado un arreglo de 5 elementos indicar si el primero elemento 
//es par y el último elemento es impar.

//Algoritmo DeterminarParImpar
    //Definir arreglo como arreglo de enteros de tamaño 5
   // Definir primero, ultimo como enteros
    
    // Solicitar al usuario los elementos del arreglo
    //Escribir "Introduce los 5 elementos del arreglo:"
    //Para i <- 1 Hasta 5 Hacer
        //Escribir "Elemento ", i, ": "
      //  Leer arreglo[i]
    //FinPara
    
    // Obtener el primer y último elemento del arreglo
    //primero <- arreglo[1]
    //ultimo <- arreglo[5]
    
    // Determinar si el primer elemento es par y el último elemento es impar
   // Si primero MOD 2 = 0 Entonces
      //  Escribir "El primer elemento es par."
    //Sino
     //   Escribir "El primer elemento no es par."
   // FinSi
    
    //Si ultimo MOD 2 <> 0 Entonces
      //  Escribir "El último elemento es impar."
    //Sino
    ///    Escribir "El último elemento no es impar."
  //  FinSi
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;

function determinarParImpar() {
    let arreglo = [];

    write("Introduce los 5 elementos del arreglo:\n");
    for (let i = 0; i < 5; i++) {
        arreglo.push(parseInt(read(`Elemento ${i + 1}: `)));
    }

    let primero = arreglo[0];
    let ultimo = arreglo[4];

    if (primero % 2 === 0) {
        write("El primer elemento es par.");
    } else {
        write("El primer elemento no es par.");
    }

    if (ultimo % 2 !== 0) {
        write("El último elemento es impar.");
    } else {
        write("El último elemento no es impar.");
    }
}

determinarParImpar();
