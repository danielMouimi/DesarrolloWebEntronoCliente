let a = parseInt(prompt("introduce el coeficiente A"));
let b = parseInt(prompt("introduce el coeficiente B"));
let c = parseInt(prompt("introduce el coeficiente C"));

let solucion1 = (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a); 
let solucion2 = (-b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
document.write("solucion1: "+solucion1+"<br> solucion2: "+solucion2);

