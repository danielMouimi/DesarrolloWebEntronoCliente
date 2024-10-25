let valor = parseInt(prompt("Dime tu edad"));
let localidad = prompt("dime tu localidad");
if (localidad == "Madrid"){
    if (valor > 17 && valor < 31){
    document.write("puede acceder al carnet de empresarios emprendedores");
    }else {
    document.write("no apto");    }
}else {
    document.write("no apto");
}
