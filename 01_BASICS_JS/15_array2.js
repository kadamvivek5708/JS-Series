const marvel_heroes = ["Iron Man","Hulk","Thor"]
const dc_heroes = ["Superman","Batman","Dead Pool"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);


// const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);

//MOSTLY USED IS THIS
const all_new_heros = [...dc_heroes , marvel_heroes[1]]
console.log(all_new_heros);

const arr3 = [1,2,3,[4,5,[6,7,[4,3]]]];
const real_usable_array = arr3.flat(Infinity)
// console.log(real_usable_array);



// console.log(Array.isArray("Vivek"))
// console.log(Array.from("Vivek"))
// console.log(Array.from({name : "Vivek"})) //INTERESTING CASE

