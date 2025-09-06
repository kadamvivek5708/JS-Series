//___________ for of___________

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
    
}
const greetings = "Hello World!!"

for(const greet of greetings){
    // console.log(greet);
    
}

//maps : map is not iterable

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':',value);
    
}

const myObject = {
    'game1' : 'GTAVC',
    'game2' : 'GTAV'
}

// for (const [key,value] of myObject) {
//     console.log(key ,':',value); 
// }


// ______________FOR IN LOOP____________

const myObject1 = {
    js:'JavaScript',
    cpp:'C++',
    rb:'ruby'
}
for (const key in myObject1) {
    // console.log(myObject1[key]);
}

for (const key in arr){ //for in loop on array
    // console.log(programming[key]);
}


//_______FOR EACH LOOP________

const coding =['js','java','cpp','html']

coding.forEach( function (val) {
    // console.log(val);
    
} )

coding.forEach( (value)=>{
    // console.log(value);
})

function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
})

const myLanguage = [
    {languageName : 'C++',
        extension : 'cpp'
    },
    {languageName : 'java',
        extension : 'java'
    },
    {languageName : 'python',
        extension : 'py'
    }
]

myLanguage.forEach( (item) => {
    console.log(item.languageName,':',item.extension);
})