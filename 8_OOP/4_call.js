
// Think of it like in Call stack first Is global execution context then few functions are created i.e createUser and SetUsername.
// Then createUser is called using constructor and value stored in chai.
// In call stack first createUser will get called and inside that function is called again SetUsername.
// 
// Our call stack

// setUsername
// createUser
// Global Execution context

// But the thing is on the top setUsername was called but didn't returned anything but executed and get removed from call stack with the data that it had. So we don't get anything from that.
// To make things available from the function that has executed and removed we use "call" key Word.
// When we call a function using "call" keyword then it give all of it's property to the function that calls the call function. Ex :-
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // here "SetUsername" function is called so it will execute and give its property to these function which is "username"
    // Providing SetUsername my address(this),and parameter .
    // By providing this to setUsername function he is saving that data in my execution context,Environment.
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
