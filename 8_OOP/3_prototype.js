// let myName = "ayush     "
// let mychannel = "Mensessential     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ayush = function(){
    console.log(`ayush is present in all objects`);
}

Array.prototype.heyAyush = function(){
    console.log(`Ayush says hello`);
}

// heroPower.ayush()
// myHeros.ayush()
// myHeros.heyAyush()
// heroPower.heyAyush()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// __proto__ is use to interchange the prototype object between diffrent object,variables,functions,etc.
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"ayush".trueLength()
"iceTea".trueLength()