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


let date = new Date();
console.log(date.getFullYear()); // 2023 (वर्तमान वर्ष)
console.log(date.getMonth()); 
console.log(date.getDate());

let text = "Hello, World!";
console.log(text.toUpperCase()); // "HELLO, WORLD!"
console.log(text.slice(1, 6));  // "Hello"


///////////// Array destructure //////////

const myArr = ["val1", "val2", "val3"]

let [myVar1, myVar2, myVar3] = myArr


console.log("value is val1", myVar1);
console.log("value is val2", myVar2);
