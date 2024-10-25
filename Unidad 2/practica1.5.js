let contador = 5;


function mifuncion() {
    let hoy = new Date();
    document.write(hoy.getHours()+":"+hoy.getMinutes()+":"+hoy.getSeconds()+"<br>");
    
    setTimeout(mifuncion,1000)
}
    setTimeout(mifuncion,1000);


