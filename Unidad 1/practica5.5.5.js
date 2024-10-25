let numero = prompt("dime un numero");
let suma = 0;
let fin = false;

for (let i = 0; i < numero.length && !fin;i++) {
    if (isNaN(parseInt(numero[i]))) {
        document.write("no es un numero");
        fin = true;
    }else {
        suma += parseInt(numero[i]);
    }
    
}
if (!fin) {
    document.write(suma);
}
