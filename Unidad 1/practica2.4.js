let valor = parseFloat(prompt("dame la temperatura en ºC"));
let faren = (( valor * 9) / 5) + 32;
document.write(valor+"ºC es "+faren+"ºF");

let valor1 = parseFloat(prompt("dame la temperatura en ºF"));
let celsius = (valor1 - 32) * 5/9;
document.write("<br>"+valor1+"ºF es "+celsius+"ºC");