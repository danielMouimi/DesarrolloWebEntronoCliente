var minutos = 0, segundos = 0;

function iniciar() {
    escribir();
    intervalo = setInterval(escribir,1000);

    document.getElementById("start").removeEventListener("click",iniciar);
}

function escribir() {
    segundos++;
    let auxiliars,auxiliarm;



    if (segundos >59) {
        minutos++;
        segundos = 0;
    }


    if (segundos < 10) {
        auxiliars = "0"+segundos;        
    }else {
        auxiliars = segundos;
    }

    if (minutos < 10) {
        auxiliarm = "0"+minutos;
    }else {
        auxiliarm = minutos;
    }


    document.getElementById("cronometro").innerText = (auxiliarm+":"+auxiliars);
}

function parar() {
    clearInterval(intervalo);
    document.getElementById("start").addEventListener("click",iniciar);
}

function reset() {
    clearInterval(intervalo);
    document.getElementById("cronometro").innerText = ("00:00");
    minutos = 0;
    segundos = 0;

    document.getElementById("start").addEventListener("click",iniciar);
}

function eventosBotones() {
    document.getElementById("start").addEventListener("click",iniciar);
    document.getElementById("stop").addEventListener("click",parar);
    document.getElementById("reset").addEventListener("click",reset);
}


window.onload = () => {
    eventosBotones();
}