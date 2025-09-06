// COMPARISION OF OPERATORS

// string automatically converted in number and then compared
console.log("1" > 2)
console.log("03" > 2)


// ____AVOIDED____
console.log(null > 0)       // FALSE
console.log(null == 0)      // FALSE
console.log(null >= 0)      // TRUE

//equality check(==) and comparision (> < >= <=) works diffrently...
// comparision convert null to a number, treation it as 0.

// SAME FOR UNDEFINED ^^^


// === (strict check) ==> used to check data types are also same or not
console.log("2" === 2);


