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

    randomNota(student) {
        let puntos = Math.random()* 21 -10;
        student.grade += puntos;
        if (student.grade > 100) {
            student.grade = 100;
        }
        if (student.grade < 0) {
            student.grade = 0;
        }
        return "the student get a: "+puntos+", and his grade look like: "+student.grade;
    }  
}


class Student extends Lambdasian {
    constructor(name,age,location,previusBackground,className,favSubjects,grade) {
        super (name,age,location);
            this.previusBackground = previusBackground;
            this.className = className;
            this.favSubjects = favSubjects;
            this.grade = grade;
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


        graduate() {
            if (this.grade >= 70) {
              return this.name+" is ready to graduate with a grade of "+this.grade;
            } else {
              return this.name+" is not ready to graduate yet. Current grade: "+this.name;
            }
          }

    }



    class ProjectManager extends Instructor{
        constructor(name,age,location,specialty,favLanguage,catchPhrase,gradClassName,favInstructor){
            super(name,age,location,specialty,favLanguage,catchPhrase);
            this.gradClassName = gradClassName;
            this.favInstructor = favInstructor;
        }

        standUp(channel){
            return this.name+" announces to "+channel+", @"+channel+" standy times";
        }

        debugsCode(student,subject) {
            return this.name+" debugs "+ student.name +"s code on "+subject;
        }
       
    }



