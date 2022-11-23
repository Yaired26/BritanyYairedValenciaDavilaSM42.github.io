let aa = {
  nombre: "Valencia Davila Britany Yaired",
  domicilio: "CALLE Alamillo Paseo Kusamil 77539",
  clave: "VLDBR01112615M900",
  curp: "VADB0111MCLVRA2",
  nacimiento: "26/11/2001",
  vigencia : "2020-2030"
}

let nombre = aa['nombre'];
let domicilio = aa['domicilio'];
let clave = aa['clave'];
let curp = aa['curp'];
let nacimiento = aa['nacimiento'];
let vigencia = aa['vigencia'];

document.write(`NOMBRE: <br> ${nombre} </p>`);
document.write(`DOMICILIO: <br> ${domicilio} </p>`);
document.write(`CLAVE DE ELECTOR: <br> ${clave} </p>`);
document.write(`CURP: <br> ${curp} </p>`);
document.write(`FECHA DE NACIMIENTO: <br> ${nacimiento} </p>`);
document.write(`VIGENCIA: <br> ${vigencia} </p>`);