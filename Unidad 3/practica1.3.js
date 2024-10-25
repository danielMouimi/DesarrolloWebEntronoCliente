function potencias(num,expon) {
    
    if (expon == 0) {
        return 1;
    }else {
        
        return num * potencias (num,expon-1);
    }

}
document.write(potencias(5,3))