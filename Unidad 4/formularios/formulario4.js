
function valnombre() {
    var nombre = document.getElementById("nombre");
    const nom = /[a-zA-Z]+/;
        
        if (!nom.test(nombre.value)) {
            nombre.style.borderColor = "red";
        }else {
            nombre.style.borderColor = "green";
        }
}


function valapellidos() {
    var nombre = document.getElementById("apellidos");
    const nom = /[a-zA-Z]+/;
        
        if (!nom.test(nombre.value)) {
            nombre.style.borderColor = "red";
        }else {
            nombre.style.borderColor = "green";
        }
}

function valtelefono() {
    var nombre = document.getElementById("telefono");
    const tel = /[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{4}/;
        
        if (!tel.test(nombre.value)) {
            nombre.style.borderColor = "red";
        }else {
            nombre.style.borderColor = "green";
        }
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
    const contr = /^(?=.*\d)(?=.*[!@#$%^&*.,;:])[A-Za-z\d!@#$%^&*.,;:]{8,}$/;


    contraseña.addEventListener("blur", () => {
        if (!contr.test(contraseña.value)) {
            e.target.style.borderColor = "red";
        }else {
            e.target.style.borderColor = "green";
        }
    }


    contraseña2.addEventListener("input", () => {
        if (contraseña.value != contraseña2.value) {
            e.target.style.borderColor = "red";
        }else {
            e.target.style.borderColor = "green";
        }
    }

                                

                                
}



















window.onload = ()=> {

}
