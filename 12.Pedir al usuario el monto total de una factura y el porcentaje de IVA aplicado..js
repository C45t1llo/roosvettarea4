// 4.	Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado.
// Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
//Algoritmo CalcularIVA
   // Definir monto, porcentajeIVA, montoIVA, montoTotal como reales
    
   // Escribir "Introduce el monto total de la factura: "
  //  Leer monto
    
    //Escribir "Introduce el porcentaje de IVA aplicado: "
    //Leer porcentajeIVA
    
    //montoIVA <- monto * (porcentajeIVA / 100)
    //montoTotal <- monto + montoIVA
    
  //  Escribir "El monto total a pagar incluyendo el IVA es: ", montoTotal
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function montoTotal(){
write("Introduce el monto total de la factura: ");
let monto = parseFloat(read());

write("Introduce el porcentaje de IVA aplicado: ");
let porcentajeIVA = parseFloat(read());

let montoIVA = monto * (porcentajeIVA / 100);
let montoTotal = monto + montoIVA;

write("El monto total a pagar incluyendo el IVA es: ", montoTotal);
}
montoTotal()