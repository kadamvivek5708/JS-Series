// Singleton

const tinderUser = new Object()

tinderUser.id = "23A";
tinderUser.name = "Yashwant";
tinderUser.isLoggedIn = false ;


// console.log(tinderUser);

const regularUser = {
    email : "abc@gmail.com",
    fullname : {
        firstname:"Vivek",
        midName:"Maruti",
        lastName:"Kadam"
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.lastName);


//merging objects

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

const obj3 = Object.assign(obj1,obj2)
const obj4 = Object.assign({},obj1,obj2)
//Object.assign(target,source1,source2...)

//Mostly used
const obj5 = {...obj1 , ...obj2}
// console.log(obj3);

const users =[
    {
        id:1,
        name:"Vivek"
    },
    {
        id:2,
        name:"Danush"
    }
]

console.log(users[1].name);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));


