//Algoritmo MultiplicacionDosNumeros
	
    // Definir variables para los números
//Definir numero1, numero2, resultado como entero
	
    // Solicitar al usuario el primer número
   // Escribir "Introduce el primer número: "
    //Leer numero1
	
    // Solicitar al usuario el segundo número
    //Escribir "Introduce el segundo número: "
    //Leer numero2
	
    // Calcular la multiplicación de los dos números
    //resultado <- numero1 * numero2
	
    // Mostrar el resultado de la multiplicación
  //  Escribir "El resultado de multiplicar ", numero1, " y ", numero2, " es: ", resultado
	
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;

function resultado() { 
    let numero1 = 0, numero2 = 0, resultado = "";
    numero1 = parseFloat(read("Introduce el primer número: "));
    numero2 = parseFloat(read("Introduce el segundo número: "));
	
    resultado = numero1 ** numero2;
	
    write("El resultado de multiplicar " + numero1.toString() + " y " + numero2.toString() + " es: " + resultado.toString());
}

resultado();
