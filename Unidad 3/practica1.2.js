function lanzamiento() {
    n = 0;
    let uno = 0, dos = 0, tres = 0, cuatro = 0, cinco = 0, seis = 0;
    while (n < 6000) {
    
    
    let aleatorio = Math.trunc(Math.random()*6 + 1);
    switch (aleatorio) {
        case 1:
        uno++;
        break;
        case 2:
            dos++
            break;
            case 3:
                tres++
                break;
                case 4:
                    cuatro++
                    break;
                    case 5:
                        cinco++;
                        break;
                        case 6:
                            seis++
                            break;
                
    }
    n++
    }
    return "uno: "+uno+" dos: "+dos+" tres: "+tres+" cuatro: "+cuatro+" cinco: "+cinco+" seis: "+seis;
}
console.log(lanzamiento());