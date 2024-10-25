
let ancho = parseInt(prompt("dime el ancho en pixeles"));

document.write("<table border = '0' cellspacing='2' bgcolor = 'black' width = '400'>");
for (let x = 0; x < 8; x++){
document.write("<tr bgcolor = 'white' height= '"+ancho+"'> ");

for (let i=0;i<8;i++){
    
    if (x%2 == 0){
        if (i%2 == 0){
            document.write("<td bgcolor = 'white' width ='"+ancho+"'>&nbsp:</td>");
    }else {
        document.write("<td bgcolor = 'black' width ='"+ancho+"'>&nbsp:</td>");
    }
    } else {
        if (i%2 != 0){
            document.write("<td bgcolor = 'white' width ='"+ancho+"'>&nbsp:</td>");
    }else {
        document.write("<td bgcolor = 'black' width ='"+ancho+"'>&nbsp:</td>");
    }
    }
        
}
document.write("</tr>");
}
document.write("</table>");