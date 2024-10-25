

document.write("<button>borrar canvas</button>");
    document.write("<table border=1>");
    for (let i = 0;i<100;i++) {
        document.write("<tr>");
        for (let x = 0; x<100;x++) {
            document.write("<td>");
            document.write("</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");





const celd = document.getElementsByTagName("td");




for (let celda of celd) {
    celda.addEventListener("mousemove",(e) =>{
        if (e.ctrlKey) {
            celda.style.backgroundColor = "red";
        }else if (e.shiftKey) {
            celda.style.backgroundColor = "blue";
        }else if (e.altKey) {
            celda.style.backgroundColor = "white";
        }
})
}

const btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", () => {
    for (let celda of celd) {
        celda.style.backgroundColor = "white";
    } 
})
