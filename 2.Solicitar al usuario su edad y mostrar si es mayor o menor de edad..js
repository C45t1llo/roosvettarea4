//2.	Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
//Algoritmo CompararEdad
    //Definir edad como entero
    
   //  Escribir "Introduce tu edad: "
       //Leer edad
    
    ///Si edad >= 18 Entonces
      //  Escribir "Eres mayor de edad"
    //Sino
    //    Escribir "Eres menor de edad"
  //  FinSi
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function edad(){ 
let edad;

write("Introduce tu edad: ");
edad = parseInt(read());

if (edad >= 18) {
    write("Eres mayor de edad");
} else {
    write("Eres menor de edad");
}
}
edad()