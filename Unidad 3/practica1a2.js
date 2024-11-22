function getRandomColorSequence(colors, length){
    nuevosColores = [];
    for(i=0;i<=length;i++){
        nuevosColores[i]=colors[Math.random()*(length)+1];
    }
    return nuevosColores;
}

console.log(getRandomColorSequence(["blue", "red", "pink"], 4));