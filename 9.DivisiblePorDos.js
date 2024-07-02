//Algoritmo DivisiblePorDos
  // Definir numero como entero
    // Escribir "Introduce un número: "
      // Leer numero
         //Si numero MOD 2 = 0 Entonces
           //Escribir "El número es divisible por 2"
            //Sino
                // Escribir "El número no es divisible por 2"
                // FinSi
               //FinAlgoritmo
               const read = require('prompt-sync')();
               const write = console.log;
                function divisible(){
               // Solicitar al usuario un número
               write("Introduce un número: ");
               let numero = parseInt(read());
               
               // Verificar si el número es divisible por 2
               if (numero % 2 === 0) {
                   write("El número es divisible por 2");
               } else {
                   write("El número no es divisible por 2");
               }
              }
              divisible()