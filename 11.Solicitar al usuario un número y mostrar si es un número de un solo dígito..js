//Solicitar al usuario un número y mostrar si es un número de un solo dígito.
//Algoritmo UnSoloDigito
    //Definir numero como entero
    
    //Escribir "Introduce un número: "
    //Leer numero
    
    //Si numero >= 0 y numero <= 9 Entonces
      //  Escribir "El número es un número de un solo dígito"
    //Sino
    //   Escribir "El número no es un número de un solo dígito"
  //  FinSi
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function digito(){
write("Introduce un número: ");
let numero = parseInt(read());

if (numero >= 0 && numero <= 9) {
    write("El número es un número de un solo dígito");
} else {
    write("El número no es un número de un solo dígito");
}
}
digito()
