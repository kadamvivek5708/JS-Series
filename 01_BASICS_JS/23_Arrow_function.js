// ARROW FUNCTIONS

const user ={
    username:"Vivek",
    id : 28,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to Jumangi`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage()

// console.log(this); // we are at node environment soo {}
// at browser console ---> windows

function chai(){
    let user = "VIvek"
    // console.log(this.user); //Cant be used -->Undefined
}
// chai()

const chaai = function(){
    let user = "VIvek"
    console.log(this.user);
}


// _____ARROW FUNCTION_____
// 

const chaaii = () => {
    let user = "VIvek"
    console.log(this);  // o/p ---> {}
}

//  Syntax -->      () => {}

const addTwo = (num1,num2) => {
    return num1+num2;
}

// console.log(addTwo(3,4));

// Implicit return method
const addTwo1 = (num1,num2) =>  num1+num2;
const addTwo2 = (num1,num2) =>  (num1+num2)

// if () --> no need return statement  [Implicit]
// if {} --> need return statement     [Explicit]

const addTwo3 = (num1,num2) =>  ({user:"Hitesh"})
console.log(addTwo3())


const myArray = [2,3,4,5,7,8]
myArray.forEach( () => {} )


// _____NOTES_____

// Traditional function
function add(a, b) {
  return a + b;
}
// Arrow function version
const add = (a, b) => a + b;

//Arrow function with block body

const multiply = (a, b) => {
  let result = a * b;
  return result;
};
// console.log(multiply(3, 4));  // Output: 12

