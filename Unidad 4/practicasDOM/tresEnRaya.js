window.onload = () => 
{
    let dificil = true;
    let cuadrados = inicio(dificil);
    let mensaje = document.getElementById("mensage");
    cuadradoGanador = inicioJuego(dificil,cuadrados);

    document.getElementById("facil").addEventListener("click", ()=> {
        dificil = false;
        cuadradoGanador = inicioJuego(dificil,cuadrados);
        eventosCuadrado(cuadrados,cuadradoGanador);
        mensaje.innerText = ("");
    });

    document.getElementById("dificil").addEventListener("click", ()=> {
        dificil = true;
        cuadradoGanador = inicioJuego(dificil,cuadrados);
        eventosCuadrado(cuadrados,cuadradoGanador);
        mensaje.innerText = ("");
    });


    eventosCuadrado(cuadrados,cuadradoGanador);


    document.getElementById("coloresNuevos").addEventListener("click", () => {
        cuadradoGanador = inicioJuego(dificil,cuadrados);
        eventosCuadrado(cuadrados,cuadradoGanador);
        mensaje.innerText = ("");
    });


    }


function inicio() {
        let cuadrados = [
            document.getElementById("cuadrado1"),
            document.getElementById("cuadrado2"),
            document.getElementById("cuadrado3"),
            document.getElementById("cuadrado4"),
            document.getElementById("cuadrado5"),
            document.getElementById("cuadrado6")
        ];
        return cuadrados;
}






function inicioJuego(modo,cuadrados) {
    if(modo){
        cuadrados.forEach(cuadro => {
            cuadro.style.display="block";
            cuadro.style.height = "130px";
            cuadro.style.width = "130px";
        });
    }else{
        cuadrados.slice(0,3).forEach(cuadro => {
            cuadro.style.display = "block";
            cuadro.style.height = "150px";
            cuadro.style.width = "150px";
        });
        cuadrados.slice(3).forEach(cuadro => cuadro.style.display = "none");
        cuadrados = cuadrados.slice(0,3);
    }

    let ganador = aleatorio()
    document.getElementById("ColorAAdivinar").innerText = ( "RGB("+ganador+")");

    asignaColor(cuadrados);
    asignaColorGanador(document.getElementById(asignaGanador(cuadrados)),ganador);
    return ganador;
}

function aleatorio()  {
    let arraycolor = [];
    for (let i = 0; i < 3; i++) {
    arraycolor[i] = Math.trunc(Math.random()*255);
    }
    let aleatorio = arraycolor.join(", ");
    return aleatorio;
}

function asignaColor(cuadrados) {
    cuadrados.forEach(cuadrado => {
        cuadrado.style.backgroundColor = "rgb("+aleatorio()+")";
    });
    
}

function asignaColorGanador(id,color) {
    id.style.backgroundColor = "rgb("+color+")";
}

function asignaGanador(cuadrados) {
    let longitud = cuadrados.length;
    let aleatorio = Math.trunc(Math.random()*(longitud-1)+1);
    id = "cuadrado"+aleatorio;
    return id;
}


function comprobarGanador(color,ganador) {
    ganador = "rgb("+ganador+")";
    if (color == ganador) {
        document.getElementById("mensage").innerText = ( "Has acertado!!");
        return true;
    }else {
        document.getElementById("mensage").innerText = ( "try again!");
        return false;
    }
}

function eventosCuadrado(cuadrados,ganador) {
    cuadrados.forEach(cuadrado => {
        cuadrado.addEventListener("click", (e)=> 
            {
                if (comprobarGanador(e.target.style.backgroundColor,ganador)) {
                    cuadrados.forEach(cuadrado => {
                        cuadrado.style.backgroundColor = "rgb("+ganador+")";
                        cuadrado.style.opacity = "100%";
                    });
                }else {
                    cuadrado.style.opacity = "0%";

                }
                
            });    
    });
}