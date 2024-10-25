let arr = [1,2,3,4,5,6,7,8,9,10];

function establece0(array) {
    let arrayb = array.map(n => n = 0);
    return arrayb;
}

function añade1(array) {
    let arrayb = array.map(n => n + 1 );
    return arrayb;
}

function separa(array) {
   return array.join(" ");
}

console.log(establece0(arr));

console.log(añade1(arr));

console.log(separa(arr));