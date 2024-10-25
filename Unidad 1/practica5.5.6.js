let numero = parseInt(prompt("dime un numero"));
let m = parseInt(prompt("dime otro nunmero"));
let suma = 0;
for (numero; numero <= m ;numero++) {
    if ( ! (numero % 2) ) {
        suma += numero;
        
    }
}

document.write(suma);