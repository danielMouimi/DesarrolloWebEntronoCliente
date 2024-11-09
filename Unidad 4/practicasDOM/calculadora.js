window.onload = () => 
{

inicio();
}


var numero1 = null;
var numero2 = null;
var operacion = null;


function inicio() {
    eventosNumeros();

}


function eventosNumeros() {
        

    document.getElementById("calc").addEventListener("click",(e)=> {

        pulsa = e.target.innerText;
        switch (pulsa) {
            case "+":
                operacion = "+";
                operar();
                break;
            case "-":
                operacion = "-";
                operar();
                break;
            case "x":
                operacion = "x";
                numero1 = operar();
                break;
            case "÷":
                operacion = "÷";
                operar();
                break;
            case "C":
                borrado();
                break;
            case "=":
                resultado(numero1,operacion);
                numero1 = null;
                operacion = null;
                break;
            default:
                pintarEnResultado(pulsa);
                break;
        }
    });
}


function pintarEnResultado(texto) {
    document.getElementById("resultado").innerText += (texto);
}


function operar() {
    introducido = document.getElementById("resultado").innerText;

    switch (operacion) {
        case "+":
            numero1 += parseFloat(introducido);
            break;
        case "-":
            numero1 = parseFloat(introducido);
            break;
        case "x":
            numero1 = parseFloat(introducido);
            break;
        case "÷":
            numero1 = parseFloat(introducido);
            break;
    }

    document.getElementById("resultado").innerText = ("");
    return numero1;
}

function resultado(numero1,operacion) {

    numero2 = document.getElementById("resultado").innerText;
    let result = 0;
    switch (operacion) {
        case "+":
            
            result = parseFloat(numero1)  + parseFloat(numero2);
            break;
        case "-":
            
            result = parseFloat(numero1)  - parseFloat(numero2);
            break;
        case "x":
            
            result = (parseFloat(numero1)) * (parseFloat(numero2));
            break;
        case "÷":
            
            result = parseFloat(numero1)  / parseFloat(numero2);
            break;
    }
        
    document.getElementById("resultado").innerText = (result);
    
}


function borrado() {
    numero1 = null;
    numero2 = null;
    operacion = null;
    document.getElementById("resultado").innerText = ("");
}

