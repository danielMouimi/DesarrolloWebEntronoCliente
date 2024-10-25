let valor = parseInt(prompt("Dime el numero de hermanos"));
let valor1 = parseInt(prompt("Dime una cantidad"));

if (valor > 3){
    valor1 = valor1 - valor1* 0.15;
    document.write(valor1);
}else if (valor == 0){
    document.write(valor1);
}else {
    valor1 = valor1 - valor1* 0.05;
    document.write(valor1);
}
