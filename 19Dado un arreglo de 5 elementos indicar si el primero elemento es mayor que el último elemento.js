//Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.

//Algoritmo CompararElementosArreglo
   // Definir arreglo como arreglo de enteros de tamaño 5
    //Definir primero, ultimo como enteros
    
    // Solicitar al usuario los elementos del arreglo
    //Escribir "Introduce los 5 elementos del arreglo:"
   // Para i <- 1 Hasta 5 Hacer
        //Escribir "Elemento ", i, ": "
      //  Leer arreglo[i]
    //FinPara
    
    // Obtener el primer y último elemento del arreglo
    //primero <- arreglo[1]
    //ultimo <- arreglo[5]
    
    // Comparar el primer y último elemento
   // Si primero > ultimo Entonces
      //  Escribir "El primer elemento es mayor que el último elemento."
    //Sino
  //      Escribir "El primer elemento no es mayor que el último elemento."
    //FinSi
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;

function compararElementosArreglo() {
    let arreglo = [];

    write("Introduce los 5 elementos del arreglo:\n");
    for (let i = 0; i < 5; i++) {
        arreglo.push(parseInt(read(`Elemento ${i + 1}: `)));
    }

    let primero = arreglo[0];
    let ultimo = arreglo[4];

    if (primero > ultimo) {
        write("El primer elemento es mayor que el último elemento.");
    } else {
        write("El primer elemento no es mayor que el último elemento.");
    }
}

compararElementosArreglo();
