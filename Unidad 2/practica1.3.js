let contador = 5;

function mifuncion() {
    document.write(contador+ "<br>");
    contador--;
    if (contador != -1){
    setTimeout(mifuncion,1000)
    }else {
        document.write("BOOOOM")
    }
}
    setTimeout(mifuncion,1000);


