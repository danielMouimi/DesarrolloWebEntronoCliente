
function LeerCookie(name) {
    let nombre = document.cookie.split("; ")
    .find((row) => row.startsWith(name+"="))
    ?.split("=")[1];


    if (nombre) {
    return nombre;
    }else {
        return null;
    }
}


function CrearCookie(name, value, minutes) {
    const expires = new Date(Date.now()+3600000 + minutes * 60000).toUTCString();
    document.cookie = name +"="+value+"; expires="+expires+"; path=/";
}


function BorrarCookie(nombre) {
    document.cookie = nombre+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}




function comprobarUsuario() {
    let nombre = LeerCookie('nombre');
    if (nombre) {
        // Si la cookie existe, saluda al usuario
        document.getElementById('mensaje').textContent = "Hola "+nombre+" de nuevo.";
    } else {
        // Si la cookie no existe, pide el nombre del usuario
        nombre = prompt('Por favor, ingresa tu nombre:');
            CrearCookie('nombre', nombre, 5); // Cookie con expiración de 5 minutos
            document.getElementById('mensaje').textContent = "Hola "+ nombre+" por primera vez";
    }
}

function eventoborrado() {
    const borrar = document.getElementById("borrado");
    
    borrar.addEventListener("click", ()=> {
        document.getElementById("mensaje").textContent = ("se ha borrado la informacion");
        document.body.style.backgroundColor = ''; // Resetear color
        document.getElementById('parrafo').style.color = '';
        document.getElementById('parrafo').style.fontSize = '';
        BorrarCookie("nombre");
        BorrarCookie('bgColor');
        BorrarCookie('textColor');
        BorrarCookie('fontSize');
    });
}



function aplicarPreferencias() {
    const bgColor = LeerCookie('bgColor');
    const textColor = LeerCookie('textColor');
    const fontSize = LeerCookie('fontSize');

    if (bgColor) document.body.style.backgroundColor = decodeURIComponent(bgColor);
    if (textColor) document.getElementById('parrafo').style.color = decodeURIComponent(textColor);
    if (fontSize) document.getElementById('parrafo').style.fontSize = decodeURIComponent(fontSize) + 'px';

    // Actualizar los inputs con los valores de las cookies
    if (bgColor) document.getElementById('bgColor').value = bgColor;
    if (textColor) document.getElementById('textColor').value = textColor;
    if (fontSize) document.getElementById('fontSize').value = fontSize;
}


function guardarPreferencias() {
    const boton = document.getElementById("guardarPreferencias");

    boton.addEventListener("click", ()=> {
    const bgColor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;
    const fontSize = document.getElementById('fontSize').value;

    CrearCookie('bgColor', bgColor, 5);
    CrearCookie('textColor', textColor, 5);
    CrearCookie('fontSize', fontSize, 5);

    aplicarPreferencias();
});
}








window.onload = ()=> {
    comprobarUsuario();
    eventoborrado();
    guardarPreferencias();
}

