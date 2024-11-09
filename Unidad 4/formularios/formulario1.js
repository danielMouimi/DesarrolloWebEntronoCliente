

function valmayus(elemento) {

    elemento.addEventListener("blur", (e) => {
        const mayus = new RegExp("[A-Z]+");
        elementoerror = document.getElementById("errmayus");

        if (!mayus.test(elemento.value)) {
            elementoerror.innerText = ("Error, debe contener una mayuscula");
            e.target.style.borderColor = "red";
        }else {
            elemento.style.borderColor = "green";
            elementoerror.innerText = ("");
        }
    });
}
function valcaracter(elemento) {
    elemento.addEventListener("blur", (e) => {
        const car = /[!@#$%^&]+/;
        elementoerror = document.getElementById("errcaracter");
        
        if (!car.test(elemento.value)) {
            elementoerror.innerText = ("Error, debe contener un caracter especial");
            e.target.style.borderColor = "red";
        }else {
            elemento.style.borderColor = "green";
            elementoerror.innerText = ("");
        }
    });
}
function valCorreo(elemento) {
    elemento.addEventListener("blur", (e) => {
        const cor = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        elementoerror = document.getElementById("errcorreo");
        if (!cor.test(elemento.value)) {
            elementoerror.innerText = ("Error, el formato de correo no es correcto");
            e.target.style.borderColor = "red";
        }else {
            elemento.style.borderColor = "green";
            elementoerror.innerText = ("");
        }
    });
}

function valtarjeta(elemento) {
    elemento.addEventListener("blur", (e) => {
        const tarjeta = /^[0-9]{15,16}$|^(([0-9]{4}\s){3}[0-9]{3,4})$/;
        elementoerror = document.getElementById("errtarjeta");
        if (!tarjeta.test(elemento.value)) {
            elementoerror.innerText = ("Error, la tarjeta es invalida");
            e.target.style.borderColor = "red";
        }else {
            elemento.style.borderColor = "green";
            elementoerror.innerText = ("");
        }
    });
}

function vallongitud(elemento) {
    elemento.addEventListener("blur", (e) => {
        const long = /[A-Za-z0-9]{8}/;
        elementoerror = document.getElementById("errlong");
        if (!long.test(elemento.value)) {
            elementoerror.innerText = ("Error, debe tener al menos 8 caracteres");
            e.target.style.borderColor = "red";
        }else {
            elemento.style.borderColor = "green";
            elementoerror.innerText = ("");
        }
    });
}

function valnumero(elemento) {
    elemento.addEventListener("blur", (e) => {
        const long = /[0-9]+/;
        elementoerror = document.getElementById("errnumero");
        if (!long.test(elemento.value)) {
            elementoerror.innerText = ("Error, debe tener minimo un numero");
            e.target.style.borderColor = "red";
        }else {
            elemento.style.borderColor = "green";
            elementoerror.innerText = ("");
        }
    });
}



window.onload = () =>{
var mayuscula = document.getElementById("mayuscula");
var caracterEspecial = document.getElementById("caracterEspecial");
var correo = document.getElementById("correo");
var tarjetaCredito = document.getElementById("tarjetaCredito");
var longitud = document.getElementById("longitud");
var numero = document.getElementById("numero");
valmayus(mayuscula);
valcaracter(caracterEspecial);
valCorreo(correo);
valtarjeta(tarjetaCredito);
vallongitud(longitud);
valnumero(numero);
}