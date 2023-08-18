// There are some property that is made for ownself but don't to have acces of that property to anyoneElse.
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
// Using static keyword we can create a private method that can use by me only ex:mongodb generate a id for its own.
    static createId(){
        return `123`
    }
}

const ayush = new User("ayush")
// console.log(ayush.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());