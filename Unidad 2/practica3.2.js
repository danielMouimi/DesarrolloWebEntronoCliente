function mayusculasMinOno(texto) {
    if (texto == texto.toLowerCase()){
        return "el texto solo esta en minusculas";
    }else if (texto == texto.toUpperCase() ){
        return "el texto esta en mayusculas";
    }else {
        return "el texto tiene mayusculas y minusculas";
    }
}

let mayus = "mayus"
document.write(mayusculasMinOno(mayus))