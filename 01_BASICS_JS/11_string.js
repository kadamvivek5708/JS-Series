const name = "Vivek-VMK";
const repo = 50;

// console.log(name + repo); // OUTDATED

// NEW ONE - PREFER THIS
console.log(`Hello my name is ${name} and my repo is ${repo}.`)


const gamename = new String("Hello-Ji") //key value ==> H:0 , e:1 , l:2 ,l:3 , o:4
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.toUpperCase());
//In above we changed case to upper ,changes are made in a copy variable not on actual original variable in stack.
console.log(gamename.indexOf("e"));

const newstr = gamename.substring(0,2);
console.log(newstr);

const newstr1 = gamename.slice(-8,5); // can also accept -ve values
console.log(newstr1);

const newstr2 = "       vivek   "
console.log(newstr2);
console.log(newstr2.trim());

const url = "www.google/20%.com";


console.log(url.replace('20%','-'));

console.log(gamename.split('-'));

// WANT TO EXPLORE MORE ABOUT STRING OPERATIONS ??? HERE YOU GO !!!
// ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/blink





