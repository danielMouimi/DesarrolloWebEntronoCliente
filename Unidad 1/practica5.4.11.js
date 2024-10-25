let nColumnas = parseInt(prompt("dime el numero de columnas"));
let alto = parseInt(prompt("dime el alto en pixeles"));
let ancho = parseInt(prompt("dime el ancho en pixeles"));

document.write("<table border = '0' cellspacing='2' bgcolor = 'black' width = '200'>");
document.write("<tr bgcolor = 'white' height= '"+alto+"'>");
do {
    nColumnas--;
    if (nColumnas%2 == 0){
        document.write("<td bgcolor = 'white' width ='"+ancho+"'>&nbsp:</td>");
    }else {
        document.write("<td bgcolor = 'black' width ='"+ancho+"'>&nbsp:</td>");
    }
}while (nColumnas != 0)
document.write("</tr>");
document.write("</table>");








