let nuevaEntradaLista = document.createElement("li");
nuevaEntradaLista.innerText = contenidoInput;

nuevaEntradaLista.addEventListener("click", (e)=> {
    e.target.parentElement.removeChild(e.target);
});
document.getElementById("lista").appendChild(nuevaEntradaLista);