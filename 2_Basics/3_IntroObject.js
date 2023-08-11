// singleton
// Object.create

// object literals
// These is the decalaration of an Symbol
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // If we want to use the symbol variable then we have to use [] , else it will be treated as string.
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "ayush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// Symbol calling pbject
// console.log(JsUser[mySym])

JsUser.email = "ayush@chatgpt.com"
// freeze method is used to stop the updation of object and its methods.
// Object.freeze(JsUser)
JsUser.email = "ayush@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());