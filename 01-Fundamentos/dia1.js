
// Regla: Calcular en una variable 'nuevoPrecio' el valor del queso aplicando el aumento de la inflación mensual.
const PRECIO_KILO_QUESO = 8500;
const INFLACION_MENSUAL = 0.05; // 5%
const nuevoPrecio = PRECIO_KILO_QUESO * (1 + INFLACION_MENSUAL)
//console.log(nuevoPrecio);

// Regla: Calcular el 'totalFactura' sumando el costo base del sistema más el costo correspondiente a la cantidad de usuarios activos.
const COSTO_BASE_SISTEMA = 150000;
const COSTO_POR_USUARIO = 5000;
let usuariosActivos = 12;
const totalFactura = COSTO_BASE_SISTEMA * COSTO_POR_USUARIO
//console.log(totalFactura);

// Regla: Calcular en la variable 'tasaConversion' qué porcentaje exacto de las visitas terminaron llenando el formulario.
let visitasWeb = 1500;
let formulariosLlenos = 45;
const tasaConversion = ((formulariosLlenos / visitasWeb) * 100)
//console.log(tasaConversion);


// Regla: Calcular 'eurosComprados'. Primero descontale al ahorro la tarifa fija del banco, y con el sobrante calculá cuántos euros podés comprar.
const AHORRO_ARS = 250000;
const TARIFA_TRANSFERENCIA = 12000;
const COTIZACION_EURO = 1250;
const eurosComprados = (AHORRO_ARS - TARIFA_TRANSFERENCIA) / COTIZACION_EURO
//console.log(eurosComprados);


// Regla: Calcular en la variable 'porcentajeLibre' qué porcentaje del disco del servidor todavía tenés disponible.
const DISCO_TOTAL_GB = 500;
let espacioOcupadoGB = 420;
const porcentajeLibre = (DISCO_TOTAL_GB / espacioOcupadoGB) -1
//console.log(porcentajeLibre);

