// CODE here for your Lambda Classes
class Person{
    constructor(attrs){
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
}
speak(){
    console.log(`Hello my name is Fred, I am from Bedrock where ${this.name} and ${this.location}`);
}
}
class Instructor extends Person{
    constructor(attrs){
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;

    }
demo(subject){
    console.log(`Today we are learning about ${subject}`);
}
grade(student, subject){
    console.log(`${student} recieves a perfect score on ${subject}`);
}

}
class Student extends Person{
    constructor(attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
listsSubjects(){

    for(let i = 0; i < this.favSubjects.length; i++)
    console.log(this.favSubjects[i]);
}
PRAssignment(subject){
    console.log(`${this.name} has submitted a PR for ${subject}`)
}
sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
}
}
class ProjectManagers extends Instructor{
    constructor(attrs){
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
standUp(channel){
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
}
debugsCode(student, subject){
    console.log(`${this.name} debugs ${student}'s code on ${subject}`);
}
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
const paul = new Instructor({
    name: 'Paul',
    location: 'Los Angeles',
    age: 56,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Your all gonna fail!`
});
const mike = new Student({
    name: 'Mike',
    location: 'Bedrock',
    age: 20,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'I can do it',
    previousBackground: 'Bartender',
    className: 'webpt12',
    favSubjects: ['HTML','CSS','JavaScript']

});
const sally = new Student({
    name: 'Sally',
    location: 'Boston',
    age: 20,
    favLanguage: 'Python',
    specialty: 'Full-Stack',
    catchPhrase: `Go for goal`,
    previousBackground: 'Skateboarder',
    className: 'webpt11',
    favSubjects: ['Python','CSS', 'C++']
});
const frank = new ProjectManagers({
    name: 'Frank',
    location: 'Boston',
    age: 35,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Whatever it takes`
});
const diane = new ProjectManagers({
    name: 'Diane',
    location: 'Bedrock',
    age: 23,
    favLanguage: 'Python',
    specialty: 'Full-Stack',
    catchPhrase: `Let's Zoom!`
});

console.log(frank.standUp('webpt11'));
console.log(diane.debugsCode('sally', 'computer-science'));
console.log(sally.listsSubjects());
console.log(sally.className);
console.log(mike.sprintChallenge('Data-Structure'));
console.log(paul.demo('DOM manipulation'));
console.log(paul.age);
console.log(paul.grade('sally', 'Python'));