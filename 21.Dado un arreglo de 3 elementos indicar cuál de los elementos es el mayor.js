//Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor

//Algoritmo EncontrarMayor
    //Definir arreglo como arreglo de enteros de tamaño 3
    //Definir mayor como entero
    
    // Solicitar al usuario los elementos del arreglo
    //Escribir "Introduce los 3 elementos del arreglo:"
    //Para i <- 1 Hasta 3 Hacer
       // Escribir "Elemento ", i, ": "
     //   Leer arreglo[i]
   // FinPara
    
    // Encontrar el mayor elemento del arreglo
   // mayor <- arreglo[1]
    //Para i <- 2 Hasta 3 Hacer
        //Si arreglo[i] > mayor Entonces
        //    mayor <- arreglo[i]
      //  FinSi
    //FinPara
    
  //  Escribir "El mayor elemento del arreglo es: ", mayor
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;

function encontrarMayor() {
    let arreglo = [];

    write("Introduce los 3 elementos del arreglo:\n");
    for (let i = 0; i < 3; i++) {
        arreglo.push(parseInt(read(`Elemento ${i + 1}: `)));
    }

    
    let mayor = arreglo[0];
    for (let i = 1; i < 3; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }

    write("El mayor elemento del arreglo es: ", mayor);
}


encontrarMayor();
