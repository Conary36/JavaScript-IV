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
class Instructor{
    constructor()
}