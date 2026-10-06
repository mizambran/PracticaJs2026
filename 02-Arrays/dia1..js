
// Regla: Usando métodos mutables:

// 1. Agregá al principio de la lista el string "Lavado completo".
// 2. Eliminá el último elemento de la lista (porque lo pateaste para el mes que viene).
const historialService = ["Cambio aceite", "Ajuste cadena", "Frenos"];
historialService.unshift('Lavado completo')
//console.log(historialService);


// Regla: Modificar directamente el objeto:
// 1. Cambiá el estado a "Activo".
// 2. Agregale la propiedad booleana 'pagoRealizado' en true.
const empresa = {
  nombre: "Kiosco El Sol",
  estado: "Pendiente"
};
empresa.estado = "Activo"
empresa.pagoRealizado = true
//console.log(empresa);

// Regla: 
// 1. Retirá al primer camión de la lista (ya entró a descargar).
// 2. Agregá al final de la lista un nuevo camión: "Patente DDD".
const camionesEnEspera = ["Patente AAA", "Patente BBB", "Patente CCC"];
camionesEnEspera.shift()
camionesEnEspera.push("Patente DDD")
//console.log(camionesEnEspera);


// Regla: Modificar el objeto:
// 1. Bajá el riesgo a "Medio".
// 2. Sumale 50000 directamente a la propiedad 'monto' (usando +=).
const portafolio = {
  inversor: "Miguel",
  monto: 150000,
  riesgo: "Alto"
};
portafolio.riesgo = "Medio"
portafolio.monto+=50000
//console.log(portafolio);

// Regla:
// 1. Vaciá el último error de la lista.
// 2. Volvé a vaciar el que ahora quedó último.
const logsError = ["Error 404", "Timeout BD", "Fallo Auth"];
logsError.pop()
logsError.pop()
console.log(logsError);


