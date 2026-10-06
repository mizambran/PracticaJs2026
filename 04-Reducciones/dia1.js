const productos = [
  { nombre: "Queso Gouda", stock: 0, precio: 12000 },
  { nombre: "Jamon Crudo", stock: 5, precio: 28000 },
  { nombre: "Salame", stock: 12, precio: 9500 },
  { nombre: "Mortadela", stock: 0, precio: 4000 }
];
// Regla: Filtrar los productos que SÍ tengan stock (mayor a 0). Ordenarlos del más barato al más caro, y mapearlos para devolver un array de strings: ["Salame: $9500", "Jamon Crudo: $28000"].

const prodConStock = [...productos]
.filter((prod) => prod.stock > 0)
.sort((a,b) => a.precio - b.precio)
.map(prod => `${prod.nombre}: $${prod.precio}`)
//console.log(prodConStock);


const logsServidor = [
  { id: 1, severidad: "INFO", msj: "Servicio iniciado" },
  { id: 2, severidad: "CRITICAL", msj: "Base de datos caída" },
  { id: 3, severidad: "WARN", msj: "Memoria al 80%" },
  { id: 4, severidad: "CRITICAL", msj: "Ataque DDoS detectado" }
];
// Regla: Filtrar únicamente los logs con severidad "CRITICAL", y mapearlos para extraer el mensaje (msj) pero convertido a MAYÚSCULAS 
const logsCriticos = logsServidor
.filter(log => log.severidad === "CRITICAL")
.map(log => log.msj.toUpperCase())
//console.log(logsCriticos);


const hostels = [
  { nombre: "Backpackers Dublin", rating: 4.1, kmsCentro: 2.5 },
  { nombre: "Temple Bar Inn", rating: 4.8, kmsCentro: 0.2 },
  { nombre: "Generator", rating: 3.9, kmsCentro: 1.5 },
  { nombre: "Abbey Court", rating: 4.5, kmsCentro: 0.8 }
];
// Regla: Filtrar los hostels con un rating mayor o igual a 4.0. Ordenarlos por cercanía al centro (de menor a mayor kmsCentro) y extraer solo los nombres de los hostels.
const hotelesFiltrados = [...hostels]
.filter(hf => hf.rating >= 4.0)
.sort((a,b) => a.kmsCentro - b.kmsCentro)
.map(hf => hf.nombre)
//console.log(hotelesFiltrados);

// Regla: Filtrar los que tengan estado "Contactado". Ordenarlos por monto de MAYOR a MENOR, y usar .slice() para quedarte únicamente con los 2 mejores presupuestos (Top 2).
const cotizaciones = [
  { cliente: "Distribuidora Sur", monto: 150000, estado: "Contactado" },
  { cliente: "Kiosco Azul", monto: 25000, estado: "Cerrado" },
  { cliente: "Supermercado XYZ", monto: 450000, estado: "Contactado" },
  { cliente: "Ferretería Norte", monto: 80000, estado: "Contactado" }
];

const mejoresPresupuestos = [...cotizaciones]
.filter(mp => mp.estado === "Contactado")
.sort((a, b) => b.monto - a.monto)
.slice(0,2)
//console.log(mejoresPresupuestos);


// Regla: Filtrar solo las inversiones de tipo "Cripto". Ordenarlas de mayor a menor rendimiento, y mapearlas para devolver: ["Bitcoin: 45%", "Ethereum: 38%"].
const inversiones = [
  { activo: "CEDEAR Apple", tipo: "Acciones", rinde: 12 },
  { activo: "Bitcoin", tipo: "Cripto", rinde: 45 },
  { activo: "FCI Liquidez", tipo: "Fondo", rinde: 3 },
  { activo: "Ethereum", tipo: "Cripto", rinde: 38 }
];
const invFiltradas = [...inversiones]
.filter(invF => invF.tipo === "Cripto")
.sort((a, b) => b.rinde - a.rinde)
.map(invF => `${invF.activo}: ${invF.rinde}%`)
//console.log(invFiltradas);


