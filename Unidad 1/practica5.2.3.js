let valor = parseInt(prompt("Dime tu edad"));
if (valor < 5){
    document.write("debe estar en jardin de infancia");
}else if (valor < 12){
    document.write("debe estar en primaria");
}else if (valor < 17){
    document.write("debe estar en la ESO");
}else if (valor < 22){
    document.write("debe estar en Bachillerato o ciclos");
}else {
    document.write("debe estar en la universidad");
}
