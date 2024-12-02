window.onload = ()=> {
let element = document.getElementById("detalle");

element.addEventListener("click", (e)=> {
    e.stopImmediatePropagation();
    element.style.opacity = "0%";
});
document.getElementById("boton").addEventListener("click", (e)=> {
    e.stopPropagation();
    console.log("has hecho click");
    element.style.opacity = "100%";
    element.style.transition = "opacity 1s";
});



}