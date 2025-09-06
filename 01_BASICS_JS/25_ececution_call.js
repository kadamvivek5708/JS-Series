// JavaScript Execution Context

// JS is single threaded
// JS is synchrones 

// Types :
// ---> Global Execution Context
// ---> Function Execution Context
// ---> Eval Execution Context

// phase I : Memory creation phase
// phase II : Execution phase

let val1 = 10;
let val2 = 1;
function addNum(num1,num2){
    let total = num1 + num2
    return total;
}
let result1 = addNum(val1,val2);
let result2 = addNum(5,4);

// Step I : Global Execution --->this
// Step II : Memory Creation Phase --->  
//      val1    -> undefined
//      val2    -> undefined
//      addNum  -> defination...
//      result1 -> undefined
//      result2 -> undefined
// Step III : Execution Phase
//      val1 <--10
//      val2 <--1
//      result1 ----> __________________________
//                   \                          \
//                   \     new variable         \
//                   \       environment        \
//                   \            +             \
//                   \      Execution           \
//                   \           Thread         \
//                   \                          \
//                   \  i)Memory Creation Phase \
//                   \  ii)Execution Phase      \
//                   \__________________________\ <---get deleted after use

//     result2 ----> __________________________
//                  \                          \
//                  \     new variable         \
//                  \       environment        \
//                  \            +             \
//                  \      Execution           \
//                  \           Thread         \
//                  \                          \
//                  \  i)Memory Creation Phase \
//                  \  ii)Execution Phase      \
//                  \__________________________\ <---get deleted after use

//  total returns to global execution context



// ******CALL STACK*******

// 
//          \                          \
//          \                          \
//          \                          \
//          \                          \
//          \ ________________________ \
//          \          TWO()           \
//          \ ________________________ \       THREE()
//          \          ONE()           \
//          \ ________________________ \
//          \        Global EC         \
//          \ _________________________\


// ____________________________________________________
// RUN THIS CODE --> BROWSER -- > SOURCE -->SNIFFET :-
// function one(){
//     console.log("one")
//     two()
// }
// function two(){
//     console.log("two")
//     three()
// }
// function three(){
//     console.log("three")
// }
// one()
// two()
// three()