
let alertas = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]



let aler = nombre => alert(alertas[(Math.floor(Math.random()*alertas.length))]+nombre);

aler(" dani")