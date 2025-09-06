// ______CONTROL_FLOW________

// if-else

// if(condition) {scope : execution stmt}
// (===) ---> also compare data types if equal

// *Nestd if :
//      if(condition){
//          if(condition){
//          }
//      }

// switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



// ____TRUTHY VALUES & FALSEY VALUES____

// if(usermail){
//     console.log("Avail");
    
// }
// else{
//         console.log(" not Avail");
// }

// falsy valy : false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy : "0" , 'false' , " " , [] , {} , function(){}


//checking if array is empty
// if (usermail.length === 0) {
//     console.log("Array is empty");
// }
    
//checking if array is empty
// const emptyObj ={}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
    
// }



// Nullish coalescing operator (??): null undefined
// Because sometimes, we want to only assign a default when a variable is truly empty (null or undefined) — and not when it’s 0, '', or false.

// code :
// let name = null;
// let displayName = name ?? "Guest";
// console.log(displayName);  // Output: Guest


let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 1 ?? 20 



// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);


// ____TERNARY_OPERATOR_____

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"):console.log("more than 80");

