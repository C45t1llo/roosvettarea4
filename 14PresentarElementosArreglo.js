//Algoritmo PresentarElementosArreglo
	
    // Definir el arreglo y variables auxiliares
  // Dimension  arreglo[5]
//Definir primero, medio, ultimo como entero
	
    // Solicitar al usuario los elementos del arreglo
    //Para i <- 1 Hasta 5 Hacer
        //Escribir "Introduce el elemento ", i, " del arreglo: "
      //  Leer arreglo[i]
    //FinPara
	
    // Obtener los elementos requeridos del arreglo
    //primero <- arreglo[1]
    //medio <- arreglo[3] // El elemento del medio en un arreglo de 5 elementos es el tercer elemento
    //ultimo <- arreglo[5]
	
    // Mostrar los elementos obtenidos
    //Escribir "El primer elemento del arreglo es: ", primero
    //Escribir "El elemento del medio del arreglo es: ", medio
  //  Escribir "El último elemento del arreglo es: ", ultimo
	
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
 function elementoprimeromedioultimo(){ 
// Definir el arreglo y variables auxiliares
let arreglo = [];
let primero, medio, ultimo;

// Solicitar al usuario los elementos del arreglo
for (let i = 0; i < 5; i++) {
    write("Introduce el elemento " + (i+1) + " del arreglo: ");
    arreglo[i] = read();
}

// Obtener los elementos requeridos del arreglo
primero = arreglo[0];
medio = arreglo[2]; // El elemento del medio en un arreglo de 5 elementos es el tercer elemento (índice 2)
ultimo = arreglo[4];

// Mostrar los elementos obtenidos
write("El primer elemento del arreglo es: ", primero);
write("El elemento del medio del arreglo es: ", medio);
write("El último elemento del arreglo es: ", ultimo);
 }
 elementoprimeromedioultimo()