let examen1 = parseInt(prompt("nota del examen numero 1"));
let examen2 = parseInt(prompt("nota del examen numero 2"));
let trabajo1 = parseInt(prompt("nota del primero trabajo"));
let trabajo2 = parseInt(prompt("nota del segundo trabajo"));

let media1 = (examen1 + examen2)/2;
let media2 = (trabajo1 + trabajo2)/2;
media1 = media1 * 0.75;
media2 = media2 * 0.25;
let suma = media1 + media2;

if (examen1 < 4.5 ||examen2 < 4.5 || trabajo1 < 4.5 || trabajo2 < 4.5){
    document.write("no aprueba la asignatura");
}else if (suma > 4.99){
    document.write("La asignatura esta aprobada");
}else {
    document.write("La asinatura esta suspensa");
}

