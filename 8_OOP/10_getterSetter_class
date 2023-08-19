class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    // Get will show the expected output to user
    get email(){
        return this._email.toUpperCase()
    }
    // set will set the value  to "_email" as a private variable bcs people doesn't know that we setting data to "_email"
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }
    // A common problem can occur when we won't use "_password" and use password in below line beacuse the constructor above will also try to save the same data to password and setter will try to do that then it will throw error of "stackOverflow"
    set password(value){
        this._password = value
    }

    // Get and Set are like intermediate between user who are accessing data from the memory where the data is stored.
}

const ayush = new User("a@ayush.ai", "abc")
console.log(ayush.email);