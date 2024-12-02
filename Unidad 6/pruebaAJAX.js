window.onload = () => {
    document.getElementById("btn").addEventListener("click", peticionAJAXmoderna);
}

function peticionAJAX() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            let datos = JSON.parse(this.responseText);
            
            
            let contenedor = document.getElementById("titulo");
            contenedor.innerHTML = "<ul>";

            datos.usuarios.forEach(usuarios => {
                contenedor.innerHTML += "<li>"+usuarios.nombre+" con "+ usuarios.edad+ "años</li>";
            });
            contenedor.innerHTML += "</ul>";

        }
    };

    xhttp.open("GET", "http://www.omdbapi.com/?apikey=7ab4a05e&", true);
    xhttp.send();
}

var contadorPagina = 0;

function peticionAJAXmoderna() {
    contadorPagina++;
    let contenidoBusca = document.getElementById("buscador").value;
    fetch("http://www.omdbapi.com/?apikey=7ab4a05e&s="+contenidoBusca+"&page="+contadorPagina, {method : "GET" })
    .then((res) => res.json())
    .then((datosRecibidos) => {
        //document.getElementById("titulo").innerHTML = ("he recibido "+ datosRecibidos.t);
        console.log(datosRecibidos);

        let milista = document.getElementById("lista");
        milista.innerHTML = "";



        añadir(datosRecibidos);
        document.getElementById("cargar").addEventListener("click",añadir);
        })
        .catch((err) => console.log("error: " + err));
}

function añadir() {
    let contenidoBusca = document.getElementById("buscador").value;
    fetch("http://www.omdbapi.com/?apikey=7ab4a05e&s="+contenidoBusca+"&page="+contadorPagina, {method : "GET" })
    .then((res) => res.json())
    .then((datosRecibidos) => {
    let milista = document.getElementById("lista");
    document.getElementById("total").innerHTML = (datosRecibidos.totalResults);

    let ul = document.createElement("ul");
    milista.appendChild(ul);

    
        datosRecibidos.Search.forEach((pelicula) => {
        let li = document.createElement("li");
        li.innerHTML = pelicula.Title + "-" + pelicula.Year;
        ul.appendChild(li);
        let img = document.createElement("img");
        img.src = pelicula.Poster;
        li.appendChild(img);
});
        contadorPagina++;

    })
    .catch((err) => console.log("error: " + err));
}



