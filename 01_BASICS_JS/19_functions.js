

function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName ----> reference
// sayMyName() ----> execute function

// sayMyName();


// while defining functions they are known as PARAMETERS(number1,number2)
function addNumbers(number1 , number2){
    console.log(number1 + number2);
}

// function_name(arguments1 , argument2,...)  --> while calling funtions they are ARGUMENTS
// addNumbers(4,"5");
// addNumbers(4,5);


function addNumbers2(num1,num2){
    return num1+num2;
}
const result = addNumbers2(2,3)
// console.log(result);

function loginUserName(username = "bot"){
    if (!username) {
        console.log("Please Enter Name !!!");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserName("Vivek"));
console.log(loginUserName());
