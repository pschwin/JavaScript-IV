// CODE here for your Lambda Classes

class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }

    speak() {
        //console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
        return(`Hello my name is ${this.name} I am from ${this.location}`);
    }
};

class Instructor extends Person {
    constructor(instInfo) {
        super(instInfo);
        this.specialty = instInfo.specialty;
        this.favLanguage = instInfo.favLanguage;
        this.catchPhrase = instInfo.catchPhrase;
    }
    demo(subject) {
        return(`Today we are learning about (${subject})`);
    }
    grade(student, subject) {
        return(`${student} receives a perfect score on ${subject}`);
    }
};

class Student extends Person {
    constructor(stuInfo) {
        super(stuInfo);
        this.previousBackground = stuInfo.previousBackground;
        this.className = stuInfo.className;
        this.favSubjects = stuInfo.favSubjects;
    }
    listsSubjects() {
        return(`${this.name} likes ${this.favSubjects[0]} and ${this.favSubjects[1]} and ${this.favSubjects[1]}`);
    }

    PRAssignment(subject) {
        return(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        return(`${this.name} has begun sprint challenge on ${subject}`);
    }
};

class ProjectManager extends Instructor{
    constructor(pmInfo){
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    }
    standUp(slackChannel){
        return(`${this.gradClassName} announces to ${slackChannel} @channel standy times!`);
    }
    debugsCode(patrick, subject){
        return(`${this.name} debugs ${patrick.name}'s code on ${subject}`);
    }

}

const josh = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 76,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'My banjo and I will teach you code young padawan'
  });


  const patrick = new Student({
    name: 'Patrick',
    location: 'Colorado',
    age: 28,
    gender: 'male',
    previousBackground: 'Cheese Maker',
    className: 'WEB17',
    favSubjects: [
        'Cow Milking',
        'Goat Milking',
        'Almond Milking'
    ]
  });


  const angelo = new ProjectManager({
    name: 'Angelo',
    location: 'The Bay',
    age: 30,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'LESS',
    catchPhrase: 'I have too many hats',
    gradClassName: 'WEB15',
    favInstructor: 'The OG Josh'
    
  });


  
  //Inheritance Testing

  //Test Methods

//speak
console.log(josh.speak());
console.log(angelo.speak());
console.log(patrick.speak());

//Instructor Methods
//demo and grade
console.log(josh.demo(josh.favLanguage));
//Playing around with arguments
console.log(josh.grade(patrick.name, 'Cheese Curdling'));

//Student Methods
//listSubjects
//PRA
//Sprint Challenge
console.log(patrick.listsSubjects());
console.log(patrick.PRAssignment(patrick.favSubjects[2]));
console.log(patrick.sprintChallenge('Hide Tanning'));


//ProjectManager Methods
console.log(angelo.standUp('#Hired'));
console.log(angelo.debugsCode(patrick, patrick.favSubjects[2]))



