// 5.	Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado.
// Calcular y mostrar el precio final luego de aplicar el descuento.
//Algoritmo CalcularPrecioFinal
    //Definir precio, porcentajeDescuento, precioFinal como reales
    
   // Escribir "Introduce el precio del producto: "
    //Leer precio
    
    //Escribir "Introduce el porcentaje de descuento aplicado: "
    //Leer porcentajeDescuento
    
  //  precioFinal <- precio - (precio * (porcentajeDescuento / 100))
    
    //Escribir "El precio final luego de aplicar el descuento es: ", precioFinal
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function producto(){
write("Introduce el precio del producto: ");
let precio = parseFloat(read());

write("Introduce el porcentaje de descuento aplicado: ");
let porcentajeDescuento = parseFloat(read());

let precioFinal = precio - (precio * (porcentajeDescuento / 100));

write("El precio final luego de aplicar el descuento es: ", precioFinal);
}
producto()