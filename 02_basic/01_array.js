const myArr = [0, 1, 2, 3, 4, 5, 6, 7]

const myHeros = ["pawan singh", "kallu singh"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[2]);


// array methods

//myArr.push(8)  // array ke last me add karta hai hai
//myArr.pop()    // array ke last me jo value hota hai usko remove karta hai
//myArr.unshift(9) // array ke first me value ko add karta hai
//myArr.shift()  // array ke first me jo value hai usko remove kar deta hai
// console.log(myArr);


// console.log(myArr.includes(4));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A", myArr);

const nyn1 = myArr.slice(1, 3) // originol array ke andar koi change nhi karta hai aur(1, 3) value dene me last value print nhi hota hai

console.log(nyn1);
console.log("B", myArr);

const nyn2 = myArr.splice(1, 3) // splice me jo valu dete hai bo orignol array se hat jata hai aur aur jo value dete hai uska last bla v print karta hai

console.log("C", myArr);
console.log(nyn2);


let foodItems = ["potato", "apple", "litchi", "tomato"];

console.log(foodItems);
console.log(foodItems.toString());

// foodItems.push("chips", "burger", "paneer");

// console.log(foodItems);

// let numList = [1, 2, 3, 4, 5];

// // numList.push(6,7,8)
// let deletedItem = numList.pop()

// console.log(numList);

// console.log(deletedItem);

let marks = [98, 67, 76, 54, 34];

console.log(marks);
console.log(marks.toString());

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let indian = ["shaktiman", "krish"]

// let heroes = marvelHeroes.concat(dcHeroes, indian);
// console.log(heroes);


let marvelHeroes = ["thor", "ironman", "spiderman"]

marvelHeroes.unshift("deta") // aage se add karta hai array me
marvelHeroes.shift() // aage se delete karta hai first element ko array me
console.log(marvelHeroes);


let hitHeroes = ["thor", "apiderman", "ironman", "krish", "shaktiman"]

console.log(hitHeroes);
console.log(hitHeroes.slice(1, 2));

let arr = [1, 2, 3, 4, 5, 6]

console.log(arr);

console.log(arr.splice(2, 2, 100, 102));

// Add Element

console.log(arr.splice());



