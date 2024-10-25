class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }



eat(somefood) {
    if (this.stomach.length >= 10) {
        console.log("stomach is full");
    }else {
        console.log ("ñam");
        return this.stomach.push(somefood);
        
    }
}


poop() {
    this.stomach = [];
}

toString() {
    return "" + this.name + ", "+this.age;
}
}

