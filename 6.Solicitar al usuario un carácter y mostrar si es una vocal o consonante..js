//1.	Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
// Algoritmo ClasificarCaracter
//Definir caracter como caracter
    
//Escribir "Introduce un carácter: "
//Leer caracter

//Si caracter = "a" ó caracter = "e" ó caracter = "i" ó caracter = "o" ó caracter = "u" Entonces
  //  Escribir "El carácter es una vocal"
//Sino
  //  Escribir "El carácter es una consonante"
//FinSi
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function caracter(){ 
// Solicitar al usuario un carácter
write("Introduce un carácter: ");
let caracter = read();

// Verificar si el carácter es una vocal o consonante
if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
    write("El carácter es una vocal");
} else {
    write("El carácter es una consonante");
}
}
caracter()