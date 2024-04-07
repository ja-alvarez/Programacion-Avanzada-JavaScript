import Cliente from "./clases/Cliente.js";
import Impuesto from "./clases/Impuesto.js";

let cliente1 = new Cliente("Jose");
let impuesto1 = new Impuesto(5_000_000, 1_000_000)
let impuestoAPagar =  cliente1.calcularImpuesto(impuesto1.montoBrutoAnual, impuesto1.deducciones);
console.log(`Nombre cliente: ${cliente1.nombre}. Impuesto a pagar: $${impuestoAPagar}`);