// (Los '0' son días de descanso)
// Regla: Usar un bucle FOR para sumar los kilómetros totales. Si el día tiene 0 km, usar 'continue' para saltar a la próxima vuelta de inmediato.
const kilometrosDiarios = [5, 0, 7, 0, 8, 10]; 

let kmTotales = 0

for(let i = 0; kilometrosDiarios.length > i ; i++){
    if(kilometrosDiarios[i] === 0) continue
    kmTotales += kilometrosDiarios[i]
}
//console.log(kmTotales);


// Regla: Usar FOR clásico. Si el monto es mayor a 500.000, agregarle dinámicamente al objeto la propiedad `categoria: "VIP"`. Si es menor o igual, `categoria: "Estándar"`.
const facturacionMensual = [
  { id: 1, monto: 150000 },
  { id: 2, monto: 800000 },
  { id: 3, monto: 45000 }
];

const CONDICION_VIP = 500000

for(let i = 0; facturacionMensual.length > i; i++){
    if(facturacionMensual[i].monto > CONDICION_VIP){
        facturacionMensual[i].categoria = "VIP"
    } else {
        facturacionMensual[i].categoria = "Estándar"
    }
}
//console.log(facturacionMensual);

// (Los negativos son devoluciones o errores de tipeo)
// Regla: Usar un bucle FOR para sumar solo las ventas reales (positivas). Si el número es menor a 0, ignorar esa vuelta usando 'continue'.
const ingresosCaja = [12000, -500, 45000, -1200, 8000];
let totalVentas = 0
for(let i = 0; ingresosCaja.length > i; i++){
    if(ingresosCaja[i] < 0) continue
    totalVentas += ingresosCaja[i]
}
//console.log(totalVentas);

// Regla: Recorrer con FOR. Si el ping supera los 100ms, sumarle 1 a la variable 'alertasRojas'.
const pings = [45, 120, 30, 250, 15];
let alertasRojas = 0;
for(let i = 0; pings.length > i; i++){
    if(pings[i] > 100){
        alertasRojas ++
    }
}
//console.log(alertasRojas);

const leads = [
  { nombre: "Empresa A", origen: "Web" },
  { nombre: "Empresa B", origen: "Referido" },
  { nombre: "Empresa C", origen: "Web" }
];
// Regla: Recorrer con FOR. Si el origen es "Web", agregar la propiedad `prioridad: "Alta"`. Si es "Referido", `prioridad: "Media"`.
for(let i = 0; leads.length > i; i++){
    if(leads[i].origen === "Web"){
        leads[i].prioridad = "Alta"
    } else{
        leads[i].prioridad = "Media"
    }
}
//console.log(leads);

