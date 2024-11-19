
var palabra = "JOSE";
var formateado = palabra.replace(/([a-zA-Z])/g, ' $1').trim();
formateado = formateado.replace(/  +/g, ' ');

var palabraSeparada = formateado.split(" ");
var vidas = 10;
var letraSeleccionada = "";

var clicado = false;
var perdido = false;


function imprimirpalabra() {
    for(let i = 0;i < palabraSeparada.length;i++) {
        document.getElementById("ahorcado").innerText += (" _ ");
    }
}

function imprimirvidas() {
    let divVidas = document.getElementById("vidas");
    divVidas.innerText = ("You have"+vidas+" lives");
    if (vidas < 3 ) {
        divVidas.style.color = "red";
        divVidas.style.fontWeight = "bold";
    }
    if (vidas == 0) {
        perdido = true;
    }

}

function eventosletra() {
    let tabla = document.getElementsByTagName("tr")[0];

    tabla.addEventListener("click", (e)=> {
        letraSeleccionada = e.target.innerText;

        if (e.target.style.color == "white") {
            clicado = true;
        }else {
            clicado = false;
        }

        comprobarLetraSeleccionada();
        e.target.style.backgroundColor = "black";
        e.target.style.color = "white";
    });

}


function comprobarLetraSeleccionada() {
    if (palabra.includes(letraSeleccionada)) {
        indice = palabraSeparada.indexOf(letraSeleccionada);
        let ahorcado = document.getElementById("ahorcado").innerText.split(" ");

        while (indice != -1) {
            ahorcado[indice] = letraSeleccionada;
            indice = palabraSeparada.indexOf(letraSeleccionada, indice + 1);
          }
          
          document.getElementById("ahorcado").innerText = (ahorcado.join(" "));

    }else {
        if (!clicado) {
        vidas--;
        imprimirvidas();
        }
    }
}

function activarPista() {
    let boton = document.getElementById("botonPista");

    boton.addEventListener("click", (e)=> {
        let nuevoP = document.createElement("p");

        nuevoP.innerText = ("La categoria es profesores de DAW");


        e.target.parentElement.appendChild(nuevoP);
        e.target.parentElement.removeChild(boton);
    });
}


window.onload = ()=> {
    imprimirpalabra();
    imprimirvidas();
    eventosletra();
    activarPista();
}


