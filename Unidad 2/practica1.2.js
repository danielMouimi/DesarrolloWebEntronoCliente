
let fechaHoy = new Date();

let fecha85 = new Date();
fecha85.setDate(fechaHoy.getDate()+85);

let fecha187 = new Date();
fecha187.setDate(fecha187.getDate()-187);

fecha85.setFullYear(fecha85.getFullYear()+2);

fecha187.setHours(fecha187.getHours()-24)

let fechaResto = new Date(fecha85-fecha187);

document.write("fecha de hoy: "+fechaHoy+"<br>");
document.write("fecha85 : "+fecha85+"<br>");
document.write("fecha187: "+fecha187+"<br>");
document.write("diferencia entre fechas: "+fechaResto+"<br>");





