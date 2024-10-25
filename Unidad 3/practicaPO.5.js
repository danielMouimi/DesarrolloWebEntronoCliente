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


class Student extends Lambdasian {
    constructor(name,age,location,previusBackground,className,favSubjects) {
        super (name,age,location) 
            this.previusBackground = previusBackground;
            this.className = className;
            this.favSubjects = favSubjects;
        }

        listSubjects(subjects) {

            return "loving "+ subjects.join()+"!";
        }

        PRAssignment(student,subject) {
            return student.name +"has submitted a PR for "+subject; 
        }

        sprintChallenge(student,subject) {
            return student.name +"has begun sprint challenge on "+subject; 
        }

    }



