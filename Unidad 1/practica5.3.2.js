let numero = parseInt(prompt("dime un numero"));
let mult;
if (numero%2 == 0) {
    mult = 2;
}else if (numero%3 == 0){
    mult = 3;
}else if (numero%5 == 0){
    mult = 5;
}
switch (mult) {
    case 2:
        document.write("el numero es par");
        break;
    case 3:
        document.write("el numero es multiplo de 3");
        break;
    case 5:
        document.write("el numero es multiplo de 5");
        break;
    default:
        document.write("no es multimplo ni de 2 ni 3 ni 5");
        break;
}




