// La asociación de vinicultores tiene como política fijar un precio inicial 
//al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 
//1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño,
 //se requiere determinar cuánto recibirá un productor por el banano que entrega 
 //en un embarque, considerando lo siguiente:
//Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
//Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.
//Realice un algoritmo para determinar la ganancia obtenida.
//Algoritmo CalcularGananciaBanano
    //Definir tipoBanano, tamañoBanano, precioInicial, ganancia como reales
    
   // Escribir "Introduce el tipo de banano (A o B): "
   // Leer tipoBanano
    
    //Escribir "Introduce el tamaño del banano (1 o 2): "
    //Leer tamañoBanano
    
    //Si tipoBanano = "A" Entonces
        //Si tamañoBanano = 1 Entonces
          //  precioInicial <- precioInicial + 2
        //Sino
       //     precioInicial <- precioInicial + 3
     //   FinSi
   // Sino Si tipoBanano = "B" Entonces
        //Si tamañoBanano = 1 Entonces
          //  precioInicial <- precioInicial - 3
        //Sino
        //    precioInicial <- precioInicial - 5
      //  FinSi
    //FinSi
    
  //  Escribir "El precio inicial del banano es: ", precioInicial
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function banano(){
// Solicitar al usuario el tipo y tamaño del banano
write("Introduce el tipo de banano (A o B): ");
let tipoBanano = read();

write("Introduce el tamaño del banano (1 o 2): ");
let tamañoBanano = parseInt(read());

// Definir el precio inicial del banano
let precioInicial = 0;

// Calcular la ganancia obtenida
if (tipoBanano === "A") {
    if (tamañoBanano === 1) {
        precioInicial += 2;
    } else {
        precioInicial += 3;
    }
} else if (tipoBanano === "B") {
    if (tamañoBanano === 1) {
        precioInicial -= 3;
    } else {
        precioInicial -= 5;
    }
}

write("El precio inicial del banano es: ", precioInicial);
}
banano()