// _____ARRAYS______

// () ==> parenthesis
// [] ==> brackets
// {} ==> braces

const myArr = [0,1,2,3,4,true,"Vivek"]
// can be of mixed data types
// Js arrays copy-operation create shallow copy

    // shallow copy --> one reference poin t (Heap)
    // deep copy --> do not share same reference point (stack) 

const myArr2 = new Array(1,2,3,4,5,6);
// console.log(myArr);



// ARRAY METHODS

// myArr2.push(6);
// myArr2.push(8);
// myArr2.pop()


// myArr2.unshift(5);
// myArr2.shift();

// console.log(myArr2.includes(2));
// console.log(myArr2.indexOf(2));


// console.log(myArr2);
// const newArr3 = myArr2.join()
// console.log(newArr3);
// console.log(typeof newArr3);


//_________________SLICE & SPLICE_____________________


//slice --> (1,3)takes elements of index 1,2
//not manipulate original array
console.log("A",myArr2);

const myn1 = myArr2.slice(1,3)

console.log(myn1);
console.log("B",myArr2);
// OP -->  A [ 1, 2, 3, 4, 5, 6 ]
//         [ 2, 3 ]
//         B [ 1, 2, 3, 4, 5, 6 ]


//splice --> (1,3)except this take all
//manipulate original array

const myn2 = myArr2.splice(1,3)
console.log(myn2);
console.log("c",myArr2);

//  OP-->      [ 2, 3, 4 ]
//             c [ 1, 5, 6 ]





