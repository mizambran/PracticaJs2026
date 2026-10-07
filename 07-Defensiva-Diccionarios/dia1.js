// Regla: Transformar este array en un diccionario directo usando .reduce().
// Resultado: { "P1": "La Serenísima", "P2": "Paladini" }
const proveedores = [
  { id: "P1", nombre: "La Serenísima" },
  { id: "P2", nombre: "Paladini" }
];

const diccProveedores = proveedores.reduce((acc, item) => {
    acc[item.id] = item.nombre
    return acc
}, {})
//console.log(diccProveedores);

// Regla: Mapear los prospectos, agregarles la propiedad 'sector' buscándola en el diccionario. Si no existe, usar el Fallback  "Sector Desconocido".
const prospectos = [{ id: 1, idSector: "S1" }, { id: 2, idSector: "S9" }];
const diccSectores = { "S1": "Tecnología", "S2": "Agro" };

const prospectosConSector = prospectos.map((prospCS) => {
    const sectorEnc = diccSectores[prospCS.idSector] || "Sector Desconocido"
    return {
        ...prospCS,
        sector:sectorEnc
    }
})
//console.log(prospectosConSector);


// Regla: Sumar todo con .reduce(). Usar parseFloat e isFinite OBLIGATORIAMENTE para que la basura no rompa el cálculo.
const transferencias = ["15000", null, 12000, NaN, ""];
const totalTransf = transferencias.reduce((acc, item) => {
    const itemNumber = parseFloat(item)
    
    if(Number.isFinite(itemNumber)){
        acc += itemNumber
    }
    return acc
}, 0)
//console.log(totalTransf);


// Regla: Convertir a array con Object.entries(), filtrar atajando la basura con isFinite(parseFloat()), y mapear para devolver: [{ empresa: "EmpA", monto: 450000 }, ...]
const sueldosAcreditados = {
  "EmpA": "450000",
  "EmpB": null,
  "EmpC": "520000",
  "EmpD": "Fallo_Red"
};
const sueldosMod = Object.entries(sueldosAcreditados)
.filter((sm) => Number.isFinite(parseFloat(sm[1])))
.map((sm) => {
    return {
        empresa:sm[0],
        monto:parseFloat(sm[1])
    }
})
//console.log(sueldosMod);


// Regla: Usar Object.values() para extraer los montos, y sumarlos en un .reduce() defensivo que filtre con parseFloat e isFinite.
const facturasAWS = {
  "Enero": "150",
  "Febrero": NaN,
  "Marzo": "200",
  "Abril": ""
};
const totalFacAWS = Object.values(facturasAWS)
.reduce((acc, item) => {
    const itemNumber = parseFloat(item)
    return Number.isFinite(itemNumber) ? acc += itemNumber : acc
}, 0)
//console.log(totalFacAWS);

