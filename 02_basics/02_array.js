const marvel_heros = ["thor","ironan","spideran"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros];

//console.log(all_new_heros);

const another_array = [1,2,3,4,[6,7,8,[1,3,6,[9,8,6]]]];

const real_another_array = another_array.flat(Infinity);
//console.log(real_another_array);

console.log(Array.isArray("Vivek"));
console.log(Array.from("Vivek"));
console.log(Array.from({name : "Vivek"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));