// 1.map()
// --> Used to transform each element of an array.
// --> Returns a new array with the same length.

// 2.filter()
// --> Used to filter out elements based on a condition.
// --> Returns a new array (may be smaller).

// 3.reduce()
// --> Used to reduce the array to a single value (sum, product, etc.).




// ____________________________FILTER METHOD_________________________

// const coding = ['js','ruby','python','cpp']

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]


const newNums = myNums.filter( (num) => num>4)
const newNum = myNums.filter( (num) => {
    return num<4
})
// ALTERNATIVE WITH FOREACH LOOP
const newNum1 = []
myNums.forEach( (item) => {
    if (item > 4 ) {
        newNum1.push(item);
    }
} )


// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userbooks = books.filter( (item) => item.genre === 'History')
const userbooks = books.filter( (item) => item.publish > 2000)
// console.log(userbooks);



// ________________________________MAP METHOD______________________________________

const array = [1,2,3,4,5,6,7,8,9,10]

let newArray = array.map((item) => item + 10)
// console.log(newArray);

//Alternative Method
const fn = (item) => (item + 10)

let newArray1 = function(array,fn){
    let newArray3 = new Array(array.length)
    for (let i = 0; i < array.length; i++) {
        newArray3[i] = fn(array[i],i)
    }
    return newArray3
}
// console.log(newArray1(array,fn));

// Chaining Method
let chaining = array
            .map( (item) => item * 5)
            .map( (item) => item - 2)
            .filter( (item) => item % 2 ==0)

// console.log(chaining);


// _______________________________________________REDUCE METHOD________________________________________________________

const arr = [1,2,3,4,5]

 
// const sumWithInitial = arr.reduce((acc,currVal) => acc + currVal,0)

// const totalSum = arr.reduce(function(acc,currVal){
//      console.log(`acc : ${acc} , currentValue : ${currVal}`);
    
//     return acc + currVal
// },0)



const cart = [
    {
        itemName : "Js course",
        price : 2999
    },{
        itemName : "PY course",
        price : 999
    },{
        itemName : "dev course",
        price : 5999
    },{
        itemName : "Data Science course",
        price : 12999
    }
]


const Total = cart.reduce( (acc , item) => acc + item.price , 0)

console.log(Total);





  