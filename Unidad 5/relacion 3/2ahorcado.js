
var palabra = "P E S O P L U M A";
var palabraSeparada = palabra.split(" ");
var vidas = 10;
var letraSeleccionada = "";


function imprimirpalabra() {
    for(let i = 0;i < palabraSeparada.length;i++) {
        document.getElementById("ahorcado").innerText += (" _ ");
    }
}

function imprimirvidas() {
    document.getElementById("vidas").innerText = ("You have"+vidas+" lives");
}

function eventosletra() {
    let tabla = document.getElementsByTagName("table")[0];

    tabla.addEventListener("click", (e)=> {
        letraSeleccionada = e.target.innerText;
        comprobarLetraSeleccionada();
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
        vidas--;
        imprimirvidas();
    }
}


window.onload = ()=> {
    imprimirpalabra();
    imprimirvidas();
    eventosletra();
}


