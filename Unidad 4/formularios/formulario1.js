

function mayus(elemento) {

    elemento.addEventListener("blur", (e) => {
        const mayus = new RegExp("[A-Z]+");
        if (!mayus.test(elemento.value)) {
            document.getElementById("errmayus").innerText = ("Error, debe contener una mayuscula");
            e.target.style.border-color = "red";
        }
    });
}
function cEsp() {
    const esp = /[!@#$%^&]+/;

    if (!esp.test(caracterEspecial)) {
        alert("No hay caracter especial 2");
    }
}
function valCorreo() {
    const corr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!corr.test(correo)) {
        alert("no esta bien el correo 3");
    }
}

window.onload = () =>{
var mayuscula = document.getElementById("mayuscula");
var caracterEspecial = document.getElementById("caracterEspecial");
var correo = document.getElementById("correo");
var tarjetaCredito = document.getElementById("tarjetaCredito");
var longitud = document.getElementById("longitud");
var numero = document.getElementById("numero");
mayus(mayuscula);
}