function getBiggestNumber(numbers){
    mayor = 0;
    for(i = 0; i<=numbers.length; i++){
        if(mayor < numbers[i]){
            mayor = numbers[i];
        }
    }
    return mayor;
}

console.log(getBiggestNumber([7, 6, 4, 15, 2]));