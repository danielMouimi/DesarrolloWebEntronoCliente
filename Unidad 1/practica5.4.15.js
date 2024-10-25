let adivino = parseInt(prompt("dime un numero"));
let numero;
while (numero != adivino){
    numero = parseInt(prompt("adivina el numero"));

    if (numero > adivino){
        alert("mas bajo");
    } else  if (numero == adivino){
        document.write("LO HAS ADIVINADO");
    } else {
        alert("mas alto");
    }
} ;

