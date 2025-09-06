function setUserName(username){
    this.username = username;
}


function createUser(username,id,pass){
    setUserName.call(this,username);

    this.id = id ;
    this.pass = pass ;
}

const newU  = new createUser("abc",12,1234)
console.log(newU)