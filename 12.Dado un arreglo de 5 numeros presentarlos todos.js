// 4.	Dado un arreglo de 5 nombres presentarlos todos
//Algoritmo Ejercicio1
//	cantidad<-5; 
//	Dimension num[cantidad]
//	Para i<-1 Hasta cantidad Con Paso 1 Hacer
//		Escribir "Ingrese un numero para la posición ",i 
//		Leer num[i]
//	FinPara
//	Escribir "Los numeros ingresados son : "
///	Para i<-1 Hasta cantidad Con Paso 1 Hacer
	//	Escribir num[i]
	//FinPara
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
 function cantidad(){ 
const cantidad = 5;
let num = [];

for (let i = 0; i < cantidad; i++) {
    write("Ingrese un número para la posición " + (i+1) + ":");
    num[i] = parseFloat(read());
}

write("Los números ingresados son:");

for (let i = 0; i < cantidad; i++) {
    write(num[i]);
}
 }
 cantidad()