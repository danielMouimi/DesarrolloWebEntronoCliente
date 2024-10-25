let numeros = [];

for (let i = 0; i<100;i++){
    numeros[i] = Math.trunc(Math.random()*1000);
}
console.log(numeros);
numeros.sort((a,b) => {
    if (a%2)
        return 1;
    else if (b%2)
        return -1;
    else
    return 0;
});
console.log(numeros);
