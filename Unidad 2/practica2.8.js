let a = "./Facebook.png";
let b = "./youtube.png";
let c = "./Insta.png";

let r = Math.random()* (3) + 1;

switch (Math.trunc(r)) {
    case 1:
        document.write("<img src='"+a+"'/>");
        break;
    case 2:
        document.write("<img src='"+b+"'/>");
        break;
    case 3:
        document.write("<img src='"+c+"'/>");
        break;
}

