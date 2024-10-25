let numero1 = parseFloat(prompt("dime un numero"));
let numero2 = parseFloat(prompt("dime otro numero"));

let operacion = prompt("dime el operador: (+,-,/,*");

switch (operacion) {
    case "+":
        document.write(numero1 + numero2);
        break;
    case "-":
        document.write(numero1 -numero2);
        break;
    case "*":
        document.write(numero1 * numero2);
        break;
    case "/":
        document.write(numero1 / numero2);
        break;
    default:
        document.write("no es valido el operador");
        break;        
}




