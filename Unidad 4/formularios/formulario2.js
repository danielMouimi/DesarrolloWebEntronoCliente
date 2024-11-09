
function valnombreyapellidos(nombre,apellidos) {
    const nom = /^[a-zA-Z]+$/;
    nombre.addEventListener("blur", (e) => {
        elementoerror = document.getElementById("errnombre");
        
        if (!nom.test(nombre.value)) {
            elementoerror.innerText = ("Error, el formato de nombre no es correcto");
            e.target.style.borderColor = "red";
        }else {
            e.target.style.borderColor = "green";
            elementoerror.innerText = ("");
        }
    });

    apellidos.addEventListener("blur", (e) =>{
        elementoerror1 = document.getElementById("errapellidos");
        if(!nom.test(apellidos.value)) {

            elementoerror1.innerText = ("Error, el formato de apellido no es correcto");
            e.target.style.borderColor = "red";
        }else {
            e.target.style.borderColor = "green";
            elementoerror1.innerText = ("");
        }
    });
}

function valdni(elemento) {
    elemento.addEventListener("blur", (e) => {
        const cor = /^[0-9]{8}[A-Z]{1}$/;
        elementoerror = document.getElementById("errdni");
        if (!cor.test(elemento.value)) {
            elementoerror.innerText = ("Error, el formato de dni no es correcto");
            e.target.style.borderColor = "red";
        }else {
            elemento.style.borderColor = "green";
            elementoerror.innerText = ("");
        }
    });
}


function valtelefono(elemento) {
    elemento.addEventListener("blur", (e) => {
        const cor = /^[0-9]{9}$/;
        elementoerror = document.getElementById("errtelefono");
        if (!cor.test(elemento.value)) {
            elementoerror.innerText = ("Error, el formato de telefono no es correcto");
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



function valusuario(elemento) {
    elemento.addEventListener("blur", (e) => {
        const long = /^(?=.*\d)(?=.*[!@#$%^&*.,;:])[A-Za-z\d!@#$%^&*.,;:]{8,}$/;
        elementoerror = document.getElementById("errusuario");
        if (!long.test(elemento.value)) {
            elementoerror.innerText = ("Error, debe tener al menos 8 caracteres, un simbolo");
            e.target.style.borderColor = "red";
        }else {
            elemento.style.borderColor = "green";
            elementoerror.innerText = ("");
        }
    });
}


window.onload = ()=> {
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var dni = document.getElementById("dni");
    var telefono = document.getElementById("telefono");
    var correo = document.getElementById("correo");
    var nombreusuario = document.getElementById("nombreusu");

    valnombreyapellidos(nombre,apellidos);
    valdni(dni);
    valtelefono(telefono);
    valCorreo(correo);
    valusuario(nombreusuario);
}