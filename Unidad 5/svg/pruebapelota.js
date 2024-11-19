window.onload = () => {
    const svgContainer = document.getElementById("contenedor");
    const limiteX = 1500;
    const limiteY = 730;

    
    const pelotas = [];
    const cantidadPelotas = 100; 

    
    for (let i = 0; i < cantidadPelotas; i++) {
        const pelota = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        const xInicial = 100;

        const yInicial = 100;

        const velocidadx = (Math.random() * 10) - 5; 
        const velocidady = (Math.random() * 10) - 5;
        const color = getRandomColor();
        const radio = (Math.random()*50) +10;

        objeto = new Bola(pelota,xInicial,yInicial,radio,color,velocidadx,velocidady);
        crearPelotas(pelota,objeto);
        pelotas.push(objeto);

        svgContainer.appendChild(pelota);
      
    }

 

    setInterval(() => {
        pelotas.forEach((pelota) => {

            pelota.X += pelota.velocidadx;
            pelota.Y += pelota.velocidady;

            mover(pelota.getele,pelota);

            if ((pelota.X + pelota.R) > limiteX || (pelota.X - pelota.R) < 0) {
                pelota.velocidadx *= -1;
            }
            if ((pelota.Y + pelota.R) > limiteY || (pelota.Y - pelota.R) < 0) {
                pelota.velocidady *= -1;
            }

            
        });
    }, 10);

    eventospelota();
};

function crearPelotas(pelota,objeto) {
    pelota.setAttribute("cx", objeto.X);

    pelota.setAttribute("cy", objeto.Y);

    pelota.setAttribute("r", objeto.R);

    pelota.setAttribute("fill", objeto.color);
}

function mover(pelota,objeto) {
    pelota.setAttribute("cx",objeto.X);
    pelota.setAttribute("cy",objeto.Y);
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



class Bola {
    constructor(getele,X,Y,R,color,velocidadx,velocidady) {
        this.getele = getele;
        this.X = X;
        this.Y = Y;
        this.R = R;
        this.color = color;
        this.velocidadx = velocidadx;
        this.velocidady = velocidady;
    }
    setattx(x) {
        this.getele.setAttribute("cx",x);
    }
    setatty(y) {
        this.getele.setAttribute("cy",y);
    }
}

function eventospelota() {
    let contenedor = document.getElementById("contenedor");

    contenedor.addEventListener("click", (e)=> {
        if (e.target != contenedor) {
        contenedor.removeChild(e.target);
        }
    });
}




/*
version simple y sin objetos
window.onload = ()=> {
    var pelota = document.getElementById("pelota");
    var posicionX = 50;
    var limiteX = 500;
    var limiteY = 500;
    var r = 40;
    var velocidad = 15;
    var velocidady = 7;
    var posicionY = 50;

    setInterval(() => {
        posicionX += velocidad;
        pelota.setAttribute("cx",posicionX);
        if ((posicionX+r) > limiteX) {
        
        velocidad *= -1;
        }else if ((posicionX-r) < 0) {
            velocidad *= -1;
        }

        posicionY += velocidady;
        pelota.setAttribute("cy",posicionY);

        if ((posicionY+r) > limiteY) {
        
            velocidady *= -1;
            }else if ((posicionY-r) < 0) {
                velocidady *= -1;
            }
    }, 30);
}

*/