function inicioJuego() {
    var tabla = document.getElementById("tablero");
    var mensaje = document.getElementById("mensaje");
    var celdas = document.getElementsByTagName("td")

    let jugador = 'X';

    tabla.addEventListener("click", (e) => {
        if (e.target.innerText === '') {
          e.target.innerText = jugador;

          if(comprobarGanador(jugador)) {
            mensaje.innerText = ("¡JUGADOR "+jugador+" GANA!");
          }else if (Array.from(celdas).every(td => td.innerText !== '')) {
            mensaje.innerText = ("¡EMPATE!");
          }else {
            jugador = jugador === 'X' ? 'O' : 'X';
          }
        }
      });
}

function comprobarGanador(jugador) {
    const celdas = document.getElementsByTagName("td");
    const posiblesVictorias = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
      [0, 4, 8], [2, 4, 6]             // Diagonales
    ];


    //comprobar la posicion es la de el jugador que ha jugado
    let comprobacion = index => celdas[index].innerText === jugador;
    //every para que devuelva un boleano con el que instancie un array que cumpla el test que se le pasa.
    let combinacion = combinacion => combinacion.every(comprobacion);

    //some para que devuelva true si se ha hecho el tres en ralla
    return posiblesVictorias.some(combinacion);
  }



  window.onload = () => {
    inicioJuego();
  }