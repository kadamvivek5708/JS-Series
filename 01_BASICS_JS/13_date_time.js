// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());


// CREATING OUR OWN DATE

// console.log(typeof myDate); //type ==> objec

let myCreatedDate = new Date(2023,0,23) // month started from 0
let myCreatedDate2 = new Date(2023,0,23,5,4) 
let myCreatedDate3 = new Date("2003-09-05") 

// console.log(myCreatedDate3.toLocaleString());



// TIME STAMP

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


//______________________________________________


let newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getDay());


//_____________________________________________

// ctrl + space (for suggestions)
newDate.toLocaleString('default',{
    weekday : "long",
})