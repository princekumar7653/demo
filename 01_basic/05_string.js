const name = "prince"

const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('prince-hc')

console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0, 4)
console.log(newString);
const anotherString = gameName.slice(-8, 4)
console.log(anotherString );

const newStringOne = "   prince    "

console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://prince.com/prince%20singh"

console.log(url.replace('%20', '_'));

console.log(url.includes('prince'));
console.log(gameName.split('_'));