// _____MEMORY_____

// Stack ==> Primitive
// Heap ==> Non Primitive


let myYtName = "Vivek_Kadam";
let anothername = myYtName;

//console.log(anothername);
anothername = "RoyalGaming"

//console.log(anothername);
// console.log(myYtName);

// In case of stack memory a new variable(copy) is created in stack
// Changes are made in copy 


//*****************************

let user1={
    email:"VMK@gmail.com",
    name:"Kumar",
    id:12
}
let user2 = user1;

user2.name = "Vivek";
// Here i changed name of user2 but it also get changed to user 1,hence there is only one object created and referenced by user1 user2 (HEAP MEMORY)
// Changes are made in original value


console.log(user1);
console.log(user2);