// Regla: En una sola línea, extraé 'puerto', y extraé 'ipPrivada' pero renombrala a 'host'.
const servidorDB = { ipPrivada: "10.0.0.5", puerto: 3306, user: "admin", pass: "1234" };
const {puerto, ipPrivada:host } = servidorDB
//console.log(puerto);
//console.log(host);


// Regla: Extraé 'id' y 'token' por un lado, y empaquetá el resto de las propiedades en un objeto llamado 'datosContacto'.
const formulario = { id: 99, token: "abc", email: "x@x.com", telefono: "123" };
const {id, token, ...datosContacto} = formulario
//console.log(id);
//console.log(token);
//console.log(datosContacto);

// Regla: Intentá leer respuestaAPI.data.metricas.cpu. Usá Optional Chaining y Nullish para que devuelva el string "Sin datos" si falla.
const respuestaAPI = { 
  success: true, 
  data: { 
    // 'metricas' no llegó en esta respuesta
  } 
};


const datos = respuestaAPI?.data?.metricas?.cpu ?? "Sin datos"
//console.log(datos);


// Regla: Convertí este array en uno nuevo que tenga los barrios SIN REPETIR usando new Set() y el operador Spread [...].
const barriosCensados = ["Centro", "Sur", "Norte", "Centro", "Sur"];
const barriosMod = [...new Set(barriosCensados)]
//console.log(barriosMod);


// Regla: Resulta que se cargaron al revés. Intercambiá los valores de estas dos variables en UNA SOLA LÍNEA usando destructuración de arrays.
let inflacionProyectada = 3.5;
let inflacionReal = 5.2;

[inflacionProyectada, inflacionReal] = [inflacionReal, inflacionProyectada]
//console.log(inflacionProyectada); //antes = 3.5
//console.log(inflacionReal);  //antes = 5.2


