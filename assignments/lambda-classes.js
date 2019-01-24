// CODE here for your Lambda Classes

class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
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
        console.log(`Today we are learning about (${subject})`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
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
        console.log(`${this.name} likes ${this.favSubjects[0]}`);
        console.log(`${this.name} likes ${this.favSubjects[1]}`);
        console.log(`${this.name} likes ${this.favSubjects[2]}`);
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
};

class ProjectManager extends Instructor{
    constructor(pmInfo){
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    }
    standUp(slackChannel){
        console.log(`${this.gradClassName} announces to ${slackChannel} @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log();
    }

}

const Josh = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 76,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'My banjo and I will teach you code young padawan'
  });


  const Patrick = new Student({
    name: 'Josh',
    location: 'Utah',
    age: 76,
    gender: 'male',
    previousBackground: 'Cheese Maker',
    className: 'WEB17',
    favSubjects: [
        'Cow Milking',
        'Goat Milking',
        'Almond Milking'
    ]
  });


  const Angelo = new ProjectManager({
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


  console.log(Josh.location);
