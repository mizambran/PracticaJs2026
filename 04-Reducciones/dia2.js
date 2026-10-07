// Regla: Usar .reduce() inicializado en {} para sumar cuánta plata entró por cada método de pago. 
// Resultado esperado: { Efectivo: 20000, MercadoPago: 8000, Tarjeta: 22000 }
const ticketsVenta = [
  { metodo: "Efectivo", total: 15000 },
  { metodo: "MercadoPago", total: 8000 },
  { metodo: "Efectivo", total: 5000 },
  { metodo: "Tarjeta", total: 22000 }
];

const totalPorMedioPago = ticketsVenta.reduce((acc, item) => {
    const medioDePago = item.metodo 
    if(acc[medioDePago] === undefined){
        acc[medioDePago] = 0
    }
    acc[medioDePago] += item.total
    return acc
}, {})
//console.log(totalPorMedioPago);



// Regla: Usar el patrón "Ring de Boxeo" (sin valor inicial) para encontrar y devolver EL OBJETO COMPLETO de la empresa que lleve más meses activa en el sistema.
const suscripciones = [
  { empresa: "Local A", mesesActivo: 12 },
  { empresa: "Super B", mesesActivo: 45 },
  { empresa: "Kiosco C", mesesActivo: 3 }
];

const empresaMasAntigua = suscripciones.reduce((acc, item) => {
    if(item.mesesActivo > acc.mesesActivo){
        acc = item
    } 
    return acc
})

//console.log(empresaMasAntigua);


// Regla: Usar .reduce() inicializado en {} para contar cuántas veces se llamó a cada endpoint.
// Resultado esperado: { "/api/users": 2, "/api/auth": 2, "/api/products": 1 }
const peticionesAPI = [
  "/api/users", 
  "/api/auth", 
  "/api/users", 
  "/api/products", 
  "/api/auth"
];
const peticionPorRuta = peticionesAPI.reduce((acc, item) => {
    const ruta = item 
    if(acc[ruta] === undefined){
        acc[ruta] = 0
    }
    acc[ruta] += 1
    return acc
}, {})
//console.log(peticionPorRuta);


// Regla: Usar .reduce() inicializado en 0. Sumar el monto si 'esIngreso' es true, restarlo si es false. Devolver el saldo final exacto.
const movimientos = [
  { concepto: "Sueldo", monto: 800000, esIngreso: true },
  { concepto: "Alquiler", monto: 150000, esIngreso: false },
  { concepto: "Freelance", monto: 120000, esIngreso: true },
  { concepto: "Supermercado", monto: 90000, esIngreso: false }
];

const saldoFinal = movimientos.reduce((acc, item) => {
    if(item.esIngreso){
        acc += item.monto
    } else {
        acc -= item.monto
    }
    return acc
}, 0)
//console.log(saldoFinal);


// Regla: Usar el patrón "Ring de Boxeo" (sin valor inicial) para encontrar el OBJETO COMPLETO del vuelo MÁS BARATO de toda la lista.
const vuelosDisponibles = [
  { id: "V1", precio: 1450, escalas: 1 },
  { id: "V2", precio: 1100, escalas: 2 },
  { id: "V3", precio: 1800, escalas: 0 },
  { id: "V4", precio: 1250, escalas: 1 }
];

const vueloMasBarato = vuelosDisponibles.reduce((acc, item) => {
    /* if(item.precio < acc.precio){
        acc = item
    }
    return acc */
    return item.precio < acc.precio ? acc = item : acc
})
//console.log(vueloMasBarato);



