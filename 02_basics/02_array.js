const marvel_heros = ["thor","ironan","spideran"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros];

console.log(all_new_heros);