//a devuelve una cadena invertida
function invierteCadena(cad_arg) {
    let resultado = "";
    for (let i = cad_arg.length; i>=0;i--){
        resultado = resultado + cad_arg.charAt(i);
    }
    return resultado;
}
let variable = "cadenita";
document.write(invierteCadena(variable));
document.write("<br>");


//b devuelve invertidas las palabras de una cadena
function inviertePalabras(cad_arg) {
    let arrPalabras = cad_arg.split(" ");
    let resultado = "";

    for (let j = 0; j < arrPalabras.length;j++){
        resultado += invierteCadena(arrPalabras[j]);
        resultado += " ";
    }
    return resultado;
}

let palabrita = "cadenita con cadenas";
document.write(inviertePalabras(palabrita));
document.write("<br>");


//c devuelve la longitud de la palabra mas larga de una cadena
function encuentraPalabraMasLarga(cad_arg){
    let arrPalabras = cad_arg.split(" ");
    let palabraLarga = 0;
    for (let j = 0; j < arrPalabras.length;j++){
        
        if (arrPalabras[j].length > palabraLarga){
            palabraLarga = arrPalabras[j];
        }
    }
    return palabraLarga;
}
let palabraMasLarga = "cadenita con cadenas";
document.write(encuentraPalabraMasLarga(palabraMasLarga));
document.write("<br>");



//e devuelve las palabras que sean mas largas que un numero dado

function filtraPalabrasMasLargas(cad_arg, i){
    let arrPalabras = cad_arg.split(" ");
    let resultado = "";
    for (let j = 0; j < arrPalabras.length;j++){
        
        if (arrPalabras[j].length > i){
            resultado += arrPalabras[j]+" ";
        }
    }
    return resultado;
    
}
let filtroMasLarga = "cadenita con cadenas";
document.write(filtraPalabrasMasLargas(filtroMasLarga,3));
document.write("<br>");


//e devuelve una cadena con la primera en mayuscula y las demas en minuscula
function cadenaBienFormada(cad_arg) {
    let primeraLetra = cad_arg.slice(0,1); 
    let resultado = cad_arg.toLowerCase();
    let numeroLetras = resultado["length"];
    resultado = primeraLetra.toUpperCase()+resultado.slice(1,numeroLetras);
    return resultado;
}

let cadenaBuena = "cAdeNita Con caDenas";
document.write(cadenaBienFormada(cadenaBuena));
document.write("<br>");
