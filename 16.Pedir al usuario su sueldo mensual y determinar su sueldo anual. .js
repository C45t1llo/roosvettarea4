// 1.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. 
//Si el sueldo anual supera los $30,000,
// aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.
//Algoritmo CalcularSueldoAnual
   // Definir sueldoMensual, sueldoAnual, impuesto, sueldoNeto como reales
   
    //Escribir "Introduce tu sueldo mensual: "
    //Leer sueldoMensual
    
    //sueldoAnual <- sueldoMensual * 12
    
    //Si sueldoAnual > 30000 Entonces
        //impuesto <- (sueldoAnual - 30000) * 0.15
       //sueldoNeto <- sueldoAnual - impuesto
    //Sino
      //  sueldoNeto <- sueldoAnual
    //FinSi
    
  //  Escribir "Tu sueldo neto anual es: ", sueldoNeto
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function sueldo(){
write("Introduce tu sueldo mensual: ");
let sueldoMensual = parseFloat(read());

let sueldoAnual = sueldoMensual * 12;

if (sueldoAnual > 30000) {
    let impuesto = (sueldoAnual - 30000) * 0.15;
    let sueldoNeto = sueldoAnual - impuesto;
    write("Tu sueldo neto anual es: ", sueldoNeto);
} else {
    write("Tu sueldo neto anual es: ", sueldoAnual);
}
}
sueldo()