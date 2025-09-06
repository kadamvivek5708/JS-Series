const course = {
    courseName:"Js",
    prise : 999,
    instructor:"Hitesh"
}

// Destructuring
const {courseName : cs} = course;
const {price} = course;
const {instructor} = course;

console.log(cs);


// JSON (Java Script Object Notation) ---> API Industry
// {
//     "name":"Vivek",
//     "courseName":"JS",
//     "price":"free"
// }