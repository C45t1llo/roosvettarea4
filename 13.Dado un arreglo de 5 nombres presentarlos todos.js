// Dado un arreglo de 5 nombres presentarlos todos
//Algoritmo PresentarNombres
//	Definir  cantidad Como Entero
//	cantidad<-5; 
//	Dimension nom[cantidad]
//	Para i<-1 Hasta cantidad Con Paso 1 Hacer;
///		Escribir "Ingrese un numero para la posición ",i 
//		Leer nom[i]
//	FinPara
//	Escribir "Los nombres ingresados son : "
//	Para i<-1 Hasta cantidad Con Paso 1 Hacer
//		Escribir nom[i]
//	FinPara
	
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function nombres(){ 
let cantidad = 5;
let nom = [];

for (let i = 0; i < cantidad; i++) {
    write("Ingrese un nombre para la posición " + (i+1) + ":");
    nom[i] = read();
}

write("Los nombres ingresados son:");

for (let i = 0; i < cantidad; i++) {
    write(nom[i]);
}
}
nombres ()