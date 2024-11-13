
function valnombre() {
    var nombre = document.getElementById("nombre");
    const nom = /[a-zA-Z]+/;
        
    nombre.addEventListener("blur", ()=> {
        if (!nom.test(nombre.value)) {
            nombre.style.borderColor = "red";
        }else {
            nombre.style.borderColor = "green";
        }
    });
}


function valapellidos() {
    var nombre = document.getElementById("apellidos");
    const nom = /[a-zA-Z]+/;
        
    nombre.addEventListener("blur", ()=> {
        if (!nom.test(nombre.value)) {
            nombre.style.borderColor = "red";
        }else {
            nombre.style.borderColor = "green";
        }
    });
}

function valtelefono() {
    var nombre = document.getElementById("telefono");
    const tel = /[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{4}/;
        
    nombre.addEventListener("blur", ()=> {
        if (!tel.test(nombre.value)) {
            nombre.style.borderColor = "red";
        }else {
            nombre.style.borderColor = "green";
        }
    });

    nombre.addEventListener("input", ()=> {
        if (nombre.value.length == 3) {
            nombre.value = nombre.value + ("-");
    }
    if (nombre.value.length == 7) {
        nombre.value += ("-");
    }

    if (nombre.value.length == 12) {
        numero = nombre.value;
    }

    if (nombre.value.length > 12) {
        nombre.value = numero;
    } 
    });
}




function valCorreo() {
    const correo = document.getElementById("correo");
    
    correo.addEventListener("blur", (e) => {
        const cor = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!cor.test(correo.value)) {
            e.target.style.borderColor = "red";
        }else {
            e.target.style.borderColor = "green";
        }
    });
}


function valcontraseña() {
    var contraseña = document.getElementById("contraseña");
    const contraseña2 = document.getElementById("Ccontraseña");
    const contr = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.:-_])[A-Za-z\d@$!%*?&.:-_]{8,}$/;


    contraseña.addEventListener("blur", () => {
        if (!contr.test(contraseña.value)) {
            contraseña.style.borderColor = "red";
        }else {
            contraseña.style.borderColor = "green";
        }
    });


    contraseña2.addEventListener("input", (e) => {
        if (contraseña.value != contraseña2.value) {
            contraseña2.style.borderColor = "red";
        }else {
            contraseña2.style.borderColor = "green";
        }
    });

                                

                                
}


window.onload = () => {
    valnombre();
    valapellidos();
    valCorreo();
    valtelefono();
    valcontraseña();
}
