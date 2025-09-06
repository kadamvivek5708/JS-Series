// Singleton --> If object created by Constructor not by literals
// Object.create


// object literals
const mySym = Symbol("key1")

const jsUser={
    "full name":"Vivek Maruti Kadam",
    age:18,
    [Symbol("key1")]:"mykey1",   // INTERVIEW PROSPECTIVE
    id:28,
    email : "Vmktest.gmail.com",
    isLogged : false

}

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

//overwrite
jsUser.email = "vk001@gmail.com";
//Lock values so that no one can change
// Object.freeze(jsUser);

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS");
}
jsUser.greeting2 = function(){
    console.log(`Hello JS user , ${this["full name"]}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
