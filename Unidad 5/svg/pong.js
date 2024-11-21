class Bola {
    constructor(getele,X,Y,R,velocidadx,velocidady) {
        this.getele = getele;
        this.X = X;
        this.Y = Y;
        this.velocidadx = velocidadx;
        this.velocidady = velocidady;
        this.R = R;
    }
    setattx(x) {
        this.getele.setAttribute("cx",x);
    }
    setatty(y) {
        this.getele.setAttribute("cy",y);
    }
}

class Rectangulo {
    constructor(getele,X,Y,ancho,alto) {
        this.getele = getele;
        this.X = X;
        this.Y = Y;
        this.ancho = ancho;
        this.alto = alto;
    }
    setatty(y) {
        this.getele.setAttribute("y",y);
    }
}

function inicio() {
    
    const paredX = 1300;
    const paredY = 700;

    movimientoPelota(paredX,paredY);

}


function movimientoPelota(limiteX,limiteY) {
    const pelota = document.getElementById("pelota");

    const posicionInicialX = 650;
    const posicionInicialY = 350;

    const velocidadx = 10; 
    const velocidady = 7;
    const radio = 30;

    objetoP = new Bola(pelota,posicionInicialX,posicionInicialY,radio,velocidadx,velocidady);
    document.addEventListener("keydown", (e) => {
    setInterval( ()=> {
        objetoP.X += objetoP.velocidadx;
        objetoP.Y += objetoP.velocidady;

        mover(objetoP.getele,objetoP);








        

        if (e.code == "KeyJ") {
                    //esto a otra funcion para darle el condicional de si toca el final para y suma punto (en otra funcion)
        if ((objetoP.X + objetoP.R) > limiteX || (objetoP.X - objetoP.R) < 0) {
            objetoP.velocidadx *= -1;
        }
        if ((objetoP.Y + objetoP.R) > limiteY || (objetoP.Y - objetoP.R) < 0) {
            objetoP.velocidady *= -1;
        }
    }



        if (e.code == "KeyW") {
        moverRectangulo(-30);
        }
        

    },30);
});
}


function mover(pelota,objeto) {
    pelota.setAttribute("cx",objeto.X);
    pelota.setAttribute("cy",objeto.Y);
}

function crearRectangulo() {
    const jugador1 = document.getElementById("jugador1");
    const jugador2 = document.getElementById("jugador2");

    const X1 = 70;
    const Y = 300;

    const X2 = 1230; 

    const ancho = 30;
    const alto = 120;

    const rectangulo1 = new Rectangulo(jugador1,X1,Y,ancho,alto);
    const rectangulo2 = new Rectangulo(jugador2,X2,Y,ancho,alto);

}

function moverRectangulo(rectangulo,movimiento) {
    rectangulo.Y += movimiento;
    rectangulo.setAttribute("y",rectangulo.Y);
}


window.onload = ()=> {
    inicio();
}
