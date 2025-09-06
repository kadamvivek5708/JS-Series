// Libraries --> Q and bluebird


// A way to Produce a Promice And consume it
const PromiseOne = new Promise(function(resolve,reject){
    //Do an Async Task
    //DB call , cryptography , network
    setTimeout(function(){
        // console.log("Async task is complete")
        resolve()
    },1000)
})
PromiseOne.then(function(){
    // console.log("Promise Consumed")
})


// A way to Produce a Promice And consume it
new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async task is complete")
        resolve()
    },1000)
}).then(function(){
    // console.log("Promise 2 Consumed")
})


// How a value can be given to promise consumption from resolve
const PromiseThree = new Promise(function(resolve,reject){
    // console.log("Async 3")
    resolve({username : "Vivek" , id : '0503'})
})

PromiseThree.then(function(user){
    // console.log(user);
})


//Chaining in Promises
const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Harry" , id:"57"} )
        }else{
            reject("Something Wrong!!!")
        }
    },1000)
})

PromiseFour
    // .then((user) => {console.log(user); return user.username } )
    // .then((username) => console.log(username))
    // .catch((error) => console.log(error))
    // .finally(() => console.log("The Promise is either resolved or rejected"))



// Async - await in promises
const PromiseFive = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"JavaScript" , id:"5"} )
        }else{
            reject("JS went Wrong!!!")
        }
    },1000)
})
async function consumePromiseFive(){
    try {
        const response = await PromiseFive;
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()



async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E:",error);
    }
}

// getAllUsers()

// Alternative of above by using fetch

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => { return response.json() })
    .then((data) => console.log(data))
    .catch((error) => console.log(error))



