//Dado un arreglo de 5 elementos presentar la suma de dichos elementos

//Algoritmo SumarElementosArreglo
    //Definir arreglo como arreglo de enteros de tamaño 5
    ///Definir suma como entero
    
    // Solicitar al usuario los elementos del arreglo
   // Escribir "Introduce los 5 elementos del arreglo:"
    //Para i <- 1 Hasta 5 Hacer
        //Escribir "Elemento ", i, ": "
      //  Leer arreglo[i]
    //FinPara
    
    // Calcular la suma de los elementos del arreglo
    //suma <- 0
    //Para i <- 1 Hasta 5 Hacer
      //  suma <- suma + arreglo[i]
    //FinPara
    
  //  Escribir "La suma de los elementos del arreglo es: ", suma
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;

function sumarElementosArreglo() {
    let arreglo = [];

    write("Introduce los 5 elementos del arreglo:\n");
    for (let i = 0; i < 5; i++) {
        arreglo.push(parseInt(read(`Elemento ${i + 1}: `)));
    }

    let suma = 0;
    for (let i = 0; i < 5; i++) {
        suma += arreglo[i];
    }

    write("La suma de los elementos del arreglo es: ", suma);
}

sumarElementosArreglo();
