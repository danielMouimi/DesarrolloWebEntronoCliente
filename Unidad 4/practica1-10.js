let imagen1 = document.getElementsByTagName("img");
let movimiento = false;
let desplazamientoX = 0;
let desplazamientoY = 0;


function mover(imagen) {
imagen.style.position = "absolute";

imagen.addEventListener("mousedown", (e)=> 
{
   movimiento = true;
   desplazamientoX = e.clientX - imagen.offsetLeft;
   desplazamientoY = e.clientY - imagen.offsetTop;
}
);

document.addEventListener("mousemove", (e)=> {
    if(movimiento) {
        imagen.style.left = (e.clientX - desplazamientoX) +'px';
        imagen.style.top = (e.clientY - desplazamientoY) + 'px';
    }
});

imagen.addEventListener("mouseup", ()=>movimiento = false);


imagen.ondragstart = function() {
    return false;
  };
}

for (img of imagen1) {
    mover(img);
}