// DOM --> Document Object Model

//Scope Level
function one(){ //Parent Function
    const username = "Tom"

    function two(){ //Child Function

        const website = "YT"
        // Child Function can access parent variables but parent cant access child variables !!!
        // console.log(username);
    }
    // console.log(website);
    
    two();
}
// also try with with conditioning 
one();


// _____INTERESTION_______

addOne(5)

function addOne(num){
    return num+1;
}

// HOISTING 
const addTwo = function(num){
    return num+2
}
addTwo(5)
