class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons) {
        this.tank += gallons;
        return ("filled correctly");
    }

    drive(distance) {
        if ((this.tank - distance / this.milesPerGallon) < 0) {
            distance = this.tank * this.milesPerGallon;

            this.odometer += distance;
            this.tank -= distance / this.milesPerGallon;

            console.log("I ran out of fuel at "+ this.odometer+" miles");
        }else {}
        this.odometer += distance;
        this.tank -= distance / this.milesPerGallon;
        console.log("distance traveled succesfuly");
        }
    }




