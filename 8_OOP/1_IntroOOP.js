const user = {
    username: "ayush",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
    // "this" plays very imporatant role it provides you the current context.

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// Creating a Function
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
// Now using the above function using new key word . 
// New help to create a new instance means if we don't use new then we will direct impact/change the above main User function itself.
// To prevent these from happening we use constructor (new)
const userOne = new User("Shubham", 12, true)
const userTwo = new User("TrialCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);