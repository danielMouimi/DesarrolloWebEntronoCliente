class Bola {
    constructor(getele) {
        this.getele = getele;
        this.X = parseInt(getele.getAttribute("cx"));
        this.Y = parseInt(getele.getAttribute("cy"));
        this.velocidadx = 10;
        this.velocidady = 7;
        this.R = parseInt(getele.getAttribute("r"));
    }
    setattx(x) {
        this.getele.setAttribute("cx", x);
    }
    setatty(y) {
        this.getele.setAttribute("cy", y);
    }
}

class Rectangulo {
    constructor(getele, X, Y, ancho, alto) {
        this.getele = getele;
        this.X = parseInt(getele.getAttribute("x"));
        this.Y = parseInt(getele.getAttribute("y"));
        this.ancho = parseInt(getele.getAttribute("width"));
        this.alto = parseInt(getele.getAttribute("height"));
        this.movimiento = 0; 
    }
    setatty(y) {
        this.getele.setAttribute("y", y);
        this.Y = y;
    }
}

function inicio() {
    const paredY = 700;

    const pelota = document.getElementById("pelota");
    const jugador1 = document.getElementById("jugador1");
    const jugador2 = document.getElementById("jugador2");

    const objetoP = new Bola(pelota);
    const rectangulo1 = new Rectangulo(jugador1);
    const rectangulo2 = new Rectangulo(jugador2);

    agregarEventos(rectangulo1, rectangulo2);
    setInterval(() => {
   
    moverRectangulos(rectangulo1, rectangulo2, paredY);
    
    if (detectarColision(objetoP, rectangulo1) || detectarColision(objetoP, rectangulo2)) {
        if (objetoP.velocidadx < 20) {
            objetoP.velocidadx *= -1.08; // Invertir dirección en X si hay colisión
        }else {
            objetoP.velocidadx *= -1;
        }
    }

    movimientoPelota(objetoP, paredY);

    },30);
}
function movimientoPelota(objetoP, limiteY) {
    
        objetoP.X += objetoP.velocidadx;
        objetoP.Y += objetoP.velocidady;

        mover(objetoP);

        
        if ((objetoP.Y + objetoP.R) > limiteY || (objetoP.Y - objetoP.R) < 0) {
            objetoP.velocidady *= -1;
        }
        comprobarGameOver(objetoP);
        
}

function mover(objeto) {
    objeto.setattx(objeto.X);
    objeto.setatty(objeto.Y);
}

function moverRectangulos(rectangulo1, rectangulo2, limiteY) {
        if (rectangulo1.movimiento !== 0) {
            const nuevaY = rectangulo1.Y + rectangulo1.movimiento;
            if (nuevaY >= 0 && (nuevaY + rectangulo1.alto) <= limiteY) {
                rectangulo1.setatty(nuevaY);
            }
        }

        
        if (rectangulo2.movimiento !== 0) {
            const nuevaY = rectangulo2.Y + rectangulo2.movimiento;
            if (nuevaY >= 0 && (nuevaY + rectangulo2.alto) <= limiteY) {
                rectangulo2.setatty(nuevaY);
            }
        }
}

function agregarEventos(rectangulo1, rectangulo2) {
    document.addEventListener("keydown", (e) => {
        const velocidad = 10; 
        if (e.code === "KeyW") {
            rectangulo1.movimiento = -velocidad;
        } else if (e.code === "KeyS") {
            rectangulo1.movimiento = velocidad;
        }
        if (e.code === "ArrowUp") {
            rectangulo2.movimiento = -velocidad;
        } else if (e.code === "ArrowDown") {
            rectangulo2.movimiento = velocidad;
        }
    });
}


function detectarColision(pelota, rectangulo) {
    // Coordenadas clave de la pelota
    const puntosPelota = {
        top: pelota.Y - pelota.R,
        bottom: pelota.Y + pelota.R,
        left: pelota.X - pelota.R,
        right: pelota.X + pelota.R,
        topLeft: { x: pelota.X - pelota.R, y: pelota.Y - pelota.R },
        topRight: { x: pelota.X + pelota.R, y: pelota.Y - pelota.R },
        bottomLeft: { x: pelota.X - pelota.R, y: pelota.Y + pelota.R },
        bottomRight: { x: pelota.X + pelota.R, y: pelota.Y + pelota.R },
    };

    const rectXMin = rectangulo.X;
    const rectXMax = rectangulo.X + rectangulo.ancho;
    const rectYMin = rectangulo.Y;
    const rectYMax = rectangulo.Y + rectangulo.alto;

    if (
        (puntosPelota.right >= rectXMin && puntosPelota.left <= rectXMax) && 
        (puntosPelota.bottom >= rectYMin && puntosPelota.top <= rectYMax)   &&

        (puntosPelota.topLeft.x >= rectXMin && puntosPelota.topLeft.x <= rectXMax &&
            puntosPelota.topLeft.y >= rectYMin && puntosPelota.topLeft.y <= rectYMax) ||
           
           (puntosPelota.topRight.x >= rectXMin && puntosPelota.topRight.x <= rectXMax &&
            puntosPelota.topRight.y >= rectYMin && puntosPelota.topRight.y <= rectYMax) ||
           
           (puntosPelota.bottomLeft.x >= rectXMin && puntosPelota.bottomLeft.x <= rectXMax &&
            puntosPelota.bottomLeft.y >= rectYMin && puntosPelota.bottomLeft.y <= rectYMax) ||
           
           (puntosPelota.bottomRight.x >= rectXMin && puntosPelota.bottomRight.x <= rectXMax &&
            puntosPelota.bottomRight.y >= rectYMin && puntosPelota.bottomRight.y <= rectYMax)
    ) {
        return true; 
    }

    return false;
}



function comprobarGameOver(objetoP) {
    if ((objetoP.X + objetoP.R) > 1300) {
        let puntos1 = parseInt(document.getElementById("puntos1").textContent);
        document.getElementById("puntos1").textContent = puntos1 + 1;

        
        objetoP.X = 650;
        objetoP.Y = 350;

        objetoP.velocidadx = -10;

        mover(objetoP);
    } else if ((objetoP.X - objetoP.R) < 0) { 
        let puntos2 = parseInt(document.getElementById("puntos2").textContent);
        document.getElementById("puntos2").textContent = puntos2 + 1;

        
        objetoP.X = 650;
        objetoP.Y = 350;

        objetoP.velocidadx = 10;
        
        mover(objetoP);
    }
}



window.onload = () => {
    inicio();
};
