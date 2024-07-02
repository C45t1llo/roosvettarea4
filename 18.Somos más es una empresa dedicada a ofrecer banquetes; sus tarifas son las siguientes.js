//1.	“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
//El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 
//100 pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas 
//el costo por platillo es de $10.00.
//Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva

//Algoritmo CalcularPresupuestoBanquete
    //Definir numeroPersonas, costoPlatillo, presupuesto, iva, totalPresupuesto como reales
    
    //Escribir "Introduce el número de personas que asistirán al evento: "
    //Leer numeroPersonas
    
    //Si numeroPersonas <= 100 Entonces
    //    costoPlatillo <- 20
    //Sino Si numeroPersonas <= 200 Entonces
     //   costoPlatillo <- 15
   // Sino
      //  costoPlatillo <- 10
    //FinSi
    
    //presupuesto <- costoPlatillo * numeroPersonas
    //iva <- presupuesto * 0.15
    //totalPresupuesto <- presupuesto + iva
    
  //  Escribir "El presupuesto total del banquete es: $", totalPresupuesto
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function evento(){
write("Introduce el número de personas que asistirán al evento: ");
let numeroPersonas = parseInt(read());

let costoPlatillo;
if (numeroPersonas <= 100) {
    costoPlatillo = 20;
} else if (numeroPersonas <= 200) {
    costoPlatillo = 15;
} else {
    costoPlatillo = 10;
}

let presupuesto = costoPlatillo * numeroPersonas;
let iva = presupuesto * 0.15;
let totalPresupuesto = presupuesto + iva;

write("El presupuesto total del banquete es: $", totalPresupuesto.toFixed(2));
}
evento()