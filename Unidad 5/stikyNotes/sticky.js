class Nota {
    constructor(texto,posicion) {
        this.texto = texto;
        this.posicion = posicion;
    }


    mover(posicion) {

    }

}





window.onload = ()=> {


    function crearNota() {
        var contenedorNotas = document.getElementById("contenedor");

        var titulo = document.getElementById("tituloNota").value;
        const nota = document.createElement("div");

        nota.innerHTML = ("<h2>"+titulo+"</h2>");
        nota.innerHTML +=("<input type='text' placeholder'Escribe Aqui'/>")
        contenedor.appendChild(nota);
    }

    document.getElementById("crear").addEventListener("click", crearNota);
}