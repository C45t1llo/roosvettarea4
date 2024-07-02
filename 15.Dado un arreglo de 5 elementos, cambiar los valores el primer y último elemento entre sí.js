//	Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí
//Algoritmo CambiarPrimerYUltimoElemento
    //Definir arreglo[5] como entero
    
    // Solicitar al usuario los elementos del arreglo
    //Para i <- 1 Hasta 5 Hacer
        //Escribir "Introduce el elemento ", i, " del arreglo: "
      //  Leer arreglo[i]
    //FinPara
    
    // Mostrar el arreglo original
    //Escribir "Arreglo original:", arreglo
    
    // Intercambiar el primer y último elemento
   // Definir temp como entero
    //temp <- arreglo[1]
    //arreglo[1] <- arreglo[5]
    //arreglo[5] <- temp
    
    // Mostrar el arreglo después del intercambio
  //  Escribir "Arreglo después del intercambio:", arreglo
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function CambiarPrimerYUltimoElemento(){ 
// Definir el arreglo y solicitar los elementos al usuario
let arreglo = [];
for (let i = 0; i < 5; i++) {
    arreglo[i] = parseFloat(read("Introduce el elemento " + (i + 1) + " del arreglo: "));
}

// Mostrar el arreglo original
write("Arreglo original:", arreglo);

// Intercambiar el primer y último elemento
let temp = arreglo[0];
arreglo[0] = arreglo[4];
arreglo[4] = temp;

// Mostrar el arreglo después del intercambio
write("Arreglo después del intercambio:", arreglo);
}
CambiarPrimerYUltimoElemento()