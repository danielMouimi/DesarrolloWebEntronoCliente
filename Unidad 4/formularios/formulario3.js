
function valnombre(nombre) {
    var nombre = document.getElementById("nombre");
    const low = /[a-z]+/;
    const upp = /[A-Z]+/;
    const car = nombre.value.length >=6;
    
        errorlow = document.getElementById("error");
        errorupp = document.getElementById("error1");
        errorcar = document.getElementById("error2");
        
        if (!low.test(nombre.value)) {
            errorlow.innerText = ("x");
        }else {
            errorlow.innerText = ("");
        } 
        
        if (!upp.test(nombre.value)){
            errorupp.innerText = ("x");
        }else {
            errorupp.innerText = ("");
        }   
        if (!car) {
            errorcar.innerText = ("x");
        }else {
            errorcar.innerText = ("");
        }
}


window.onload = ()=> {
    nombre.addEventListener("focus", valnombre);
    nombre.addEventListener("input",valnombre);
}