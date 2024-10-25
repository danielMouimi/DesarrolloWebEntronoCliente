const btn = document.getElementsByTagName("button");

function alertaa() {
alert("hasclicado")
}


btn[0].addEventListener("click",alertaa );
btn[1].addEventListener("click",() => document.body.style.backgroundColor = "blue");
btn[2].addEventListener("click",() => btn[0].removeEventListener("click",alertaa));