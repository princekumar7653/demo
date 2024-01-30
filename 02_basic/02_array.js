 let marvelHeroes = ["thor", "spiderman", "ironman"]
 let dcHeroes = ["superman", "batman"]
// let indianHeroes = ["shaktiman", "krish"]

// let heroes = marvelHeroes.concat(indianHeroes, dcHeroes); // concat operator

// console.log(heroes);

const all_new_heroes = [...marvelHeroes, ...dcHeroes] // sprad operator

//console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_aray = another_array.flat(Infinity)

//console.log(real_another_aray);

console.log(Array.isArray(["prince"]));

console.log(Array.from("prince"));

console.log(Array.from({name: "prince"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));