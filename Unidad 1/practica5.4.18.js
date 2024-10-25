
let nColumnas = parseInt(prompt("dime el numero de columnas"));
let nFilas = parseInt(prompt("dime el numero de filas"));
let alto = parseInt(prompt("dime el alto en pixeles"));
let ancho = parseInt(prompt("dime el ancho en pixeles"));

document.write("<table border = '0' cellspacing='2' bgcolor = 'black' width = '200'>");
for (let x = 0; x < nFilas; x++){
document.write("<tr bgcolor = 'white' height= '"+alto+"'>");

for (i=0;i<nColumnas;i++){
    if (i%2 == 0){
        document.write("<td width ='"+ancho+"'>&nbsp:</td>");
    }else {
        document.write("<td width ='"+ancho+"'>&nbsp:</td>");
    }
}
document.write("</tr>");
}
document.write("</table>");