window.onload = () => 
{
    const ganador = aleatorio()
    document.getElementById("ColorAAdivinar").innerText = ( "RGB("+ganador+")");

    let cuadrado1 = document.getElementById("cuadrado1");
    let cuadrado2 = document.getElementById("cuadrado2");
    let cuadrado3 = document.getElementById("cuadrado3");
    let cuadrado4 = document.getElementById("cuadrado4");
    let cuadrado5 = document.getElementById("cuadrado5");
    let cuadrado6 = document.getElementById("cuadrado6")


    asignaColor(cuadrado1);
    asignaColor(cuadrado2);
    asignaColor(cuadrado3);
    asignaColor(cuadrado4);
    asignaColor(cuadrado5);
    asignaColor(cuadrado6);
    asignaColorGanador(document.getElementById(asignaGanador()),ganador);



    cuadrado1.addEventListener("click", (e)=> 
    {
        comprobarGanador(e.target.style.backgroundColor,ganador);
    });
    cuadrado2.addEventListener("click", (e)=> 
        {
            comprobarGanador(e.target.style.backgroundColor,ganador);
        });
        cuadrado3.addEventListener("click", (e)=> 
            {
                comprobarGanador(e.target.style.backgroundColor,ganador);
            });
            cuadrado4.addEventListener("click", (e)=> 
                {
                    comprobarGanador(e.target.style.backgroundColor,ganador);
                });
                cuadrado5.addEventListener("click", (e)=> 
                    {
                        comprobarGanador(e.target.style.backgroundColor,ganador);
                    });
                    cuadrado6.addEventListener("click", (e)=> 
                        {
                            comprobarGanador(e.target.style.backgroundColor,ganador);
                        });
    


}

function aleatorio()  {
    let arraycolor = [];
    for (let i = 0; i < 3; i++) {
    arraycolor[i] = Math.trunc(Math.random()*255);
    }
    let aleatorio = arraycolor.join(", ");
    return aleatorio;
}

function asignaColor(id) {
    id.style.backgroundColor = "rgb("+aleatorio()+")";
}

function asignaColorGanador(id,color) {
    id.style.backgroundColor = "rgb("+color+")";
}

function asignaGanador() {
    let aleatorio = Math.trunc(Math.random()*5 +1);
    id = "cuadrado"+aleatorio;
    return id;
}


function comprobarGanador(color,ganador) {
    ganador = "rgb("+ganador+")";
    if (color == ganador) {
        document.getElementById("mensage").innerText = ( "Has acertado!!");
    }else {
        document.getElementById("mensage").innerText = ( "try again!");
    }
}