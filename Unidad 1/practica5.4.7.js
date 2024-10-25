let adivino = parseInt(prompt("dime un numero"));
let numero = 0;
do {
    numero = parseInt(prompt("adivina el numero"));

    if (numero > adivino){
        alert("mas bajo");
    } else  if (numero < adivino){
        alert("mas alto");
    }else {
        document.write("LO HAS ADIVINADO");
    }
} while (numero != adivino);









