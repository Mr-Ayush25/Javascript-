// Class is nothing but syntactic sugar of objects
class User{
    // Calling constructor
    constructor(username,email,password){
        this.username = username,
        this.email = email,
        this.password = password
    }
    // setting methods/properties
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const ayush = new User("Ayush","mr.ayush8459@gmail.com","51254")
console.log(ayush)
console.log(ayush.encryptPassword())

// Behind the scene what is going on.
function newUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

newUser.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
newUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const shubham = new newUser("shubham","mr.shubham8459@gmail.com","51254")

console.log(shubham.encryptPassword());
console.log(shubham.changeUsername());