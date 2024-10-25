class Lambdasian {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak() {
        return "hello my name is "+this.name+", I am from "+this.location;
    }

    }

class Instructor extends Lambdasian {
    constructor (name,age,location,specialty,favLanguage,catchPhrase) {
        super(name,age,location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        return "Today we are learning about "+subject;
      }
    
      grade(student, subject) {
        return student.name+ " receives a perfect score on "+subject;
      }
}


