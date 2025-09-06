

class user {
    constructor(username,id,pass){
        this.username = username;
        this.id = id;
        this.pass = pass;
    }

    encryptPass(){
        return `${this.pass}abc`;
    }
}

const users = new user("Vivek" , 12,56)

console.log(users.encryptPass());


// __________behind the scene_____________-

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());