  # demo
this is the first repository 
<br>
author- prince kumar

######### javascript interview question? ####################

जावास्क्रिप्ट क्या है?
उत्तर:
जावास्क्रिप्ट एक हल्की, इंटरप्रेटेड प्रोग्रामिंग भाषा है जिसका उपयोग वेब पेज को डायनामिक और इंटरएक्टिव बनाने के लिए किया जाता है।

2. जावास्क्रिप्ट में डेटा प्रकार (Data Types) कौन-कौन से हैं?
उत्तर:

प्रिमिटिव प्रकार: String, Number, Boolean, Undefined, Null, Symbol, BigInt।
नॉन-प्रिमिटिव प्रकार: Object (जिसमें Arrays और Functions शामिल हैं)।
3. let, var और const में क्या अंतर है?
उत्तर:

var: फ़ंक्शन-स्कोप में काम करता है, दोबारा डिक्लेयर किया जा सकता है।
let: ब्लॉक-स्कोप में काम करता है, दोबारा डिक्लेयर नहीं किया जा सकता।
const: ब्लॉक-स्कोप में काम करता है और इसे रीअसाइन नहीं किया जा सकता।

4. == और === में क्या अंतर है?
उत्तर:

==: यह टाइप कन्वर्जन (Type Conversion) के बाद समानता की जांच करता है।
===: यह बिना टाइप कन्वर्जन के समानता की जांच करता है।

5. जावास्क्रिप्ट में फ़ंक्शन्स क्या हैं?
उत्तर:
फ़ंक्शन कोड का एक ब्लॉक होता है जो कोई विशिष्ट कार्य करता है।
उदाहरण:

javascript
Copy code
function जोड़ें(a, b) {
  return a + b;
}

6. कॉलबैक फ़ंक्शन (Callback Function) क्या होता है?
उत्तर:
कॉलबैक एक ऐसा फ़ंक्शन है जिसे दूसरे फ़ंक्शन के तर्क (argument) के रूप में पास किया जाता है और बाद में इसे निष्पादित किया जाता है।
उदाहरण:

javascript
Copy code
function अभिवादन(नाम, callback) {
  callback(नाम);
}
अभिवादन("अलिस", (नाम) => console.log("नमस्ते " + नाम));

7. undefined और null में क्या अंतर है?
उत्तर:

undefined: जब किसी वेरिएबल को डिक्लेयर किया जाता है लेकिन उसे वैल्यू नहीं दी जाती।
null: एक जानबूझकर वैल्यू की अनुपस्थिति को दर्शाता है।

8. जावास्क्रिप्ट में क्लोजर (Closures) क्या होते हैं?
उत्तर:
क्लोजर एक ऐसा फ़ंक्शन है जो बाहरी फ़ंक्शन के वेरिएबल्स तक पहुंच सकता है, भले ही बाहरी फ़ंक्शन समाप्त हो गया हो।
उदाहरण:

javascript
Copy code
function बाहरी() {
  let काउंट = 0;
  return function आंतरिक() {
    काउंट++;
    return काउंट;
  };
}
const बढ़ाएं = बाहरी();
console.log(बढ़ाएं()); // 1

9. होस्टिंग (Hoisting) क्या है?
उत्तर:
होस्टिंग वह प्रक्रिया है जिसमें जावास्क्रिप्ट वेरिएबल और फ़ंक्शन डिक्लेरेशन को स्कोप के शीर्ष पर ले जाता है।

10. जावास्क्रिप्ट में टेम्पलेट लिटरल्स (Template Literals) क्या हैं?
उत्तर:
टेम्पलेट लिटरल्स बैकटिक्स (`) का उपयोग करते हुए स्ट्रिंग्स लिखने का तरीका है जिसमें ${} के अंदर एक्सप्रेशन का उपयोग किया जा सकता है।
उदाहरण:

javascript
Copy code
const नाम = "अलिस";
console.log(नमस्ते, ${नाम}!);

11. जावास्क्रिप्ट ऑब्जेक्ट्स क्या हैं?
उत्तर:
ऑब्जेक्ट्स कुंजी-मूल्य (Key-Value) के जोड़े होते हैं।
उदाहरण:

javascript
Copy code
const व्यक्ति = { नाम: "अलिस", उम्र: 25 };
12. जावास्क्रिप्ट में एरे (Array) क्या है?
उत्तर:
एरे डेटा का एक संग्रह है जिसे एक ही वेरिएबल में संग्रहीत किया जाता है।
उदाहरण:

javascript
Copy code
const फल = ["सेब", "केला", "चेरी"];

13. एरो फ़ंक्शन (Arrow Function) क्या है?
उत्तर:
एरो फ़ंक्शन जावास्क्रिप्ट में फ़ंक्शन लिखने का एक संक्षिप्त तरीका है।
उदाहरण:

javascript
Copy code
const जोड़ें = (a, b) => a + b;

14. map() और forEach() में क्या अंतर है?
उत्तर:

map(): एक नया एरे रिटर्न करता है।
forEach(): केवल एरे के हर आइटम पर ऑपरेशन करता है।

15. typeof का उपयोग क्या है?
उत्तर:
typeof किसी वेरिएबल का प्रकार (Type) जांचने के लिए उपयोग होता है।
उदाहरण:

javascript
Copy code
console.log(typeof "नमस्ते"); // string

16. जावास्क्रिप्ट प्रॉमिस (Promise) क्या है?
उत्तर:
प्रॉमिस असिंक्रोनस ऑपरेशन्स को हैंडल करने के लिए उपयोग होता है।

17. इवेंट क्या है?
उत्तर:
इवेंट्स ब्राउज़र या उपयोगकर्ता की गतिविधियाँ होती हैं जैसे click, mouseover, या keydown।

18. this क्या दर्शाता है?
उत्तर:
this उस ऑब्जेक्ट को दर्शाता है जो वर्तमान में कोड चला रहा है।

19. DOM क्या है?
उत्तर:
DOM (Document Object Model) HTML दस्तावेज़ की संरचना को दर्शाता है, जिसे जावास्क्रिप्ट से संशोधित किया जा सकता है।

20. setTimeout() का उपयोग क्या है?
उत्तर:
setTimeout() किसी फ़ंक्शन को निर्दिष्ट समय के बाद चलाने के लिए उपयोग होता है।
उदाहरण:

javascript
Copy code
setTimeout(() => console.log("नमस्ते"), 1000);
21. setInterval() क्या करता है?
उत्तर:
setInterval() किसी फ़ंक्शन को हर निर्दिष्ट अंतराल पर बार-बार चलाने के लिए उपयोग होता है।

22. NaN का मतलब क्या है?
उत्तर:
NaN का मतलब "Not-a-Number" है। यह गणितीय ऑपरेशन के असफल होने का संकेत है।

23. स्प्रेड ऑपरेटर (...) क्या है?
उत्तर:
स्प्रेड ऑपरेटर एरे या ऑब्जेक्ट की सामग्री को विस्तारित करने के लिए उपयोग होता है।
उदाहरण:

javascript
Copy code
const संख्याएँ = [1, 2, 3];
console.log([...संख्याएँ, 4]); // [1, 2, 3, 4]

24. डिस्ट्रक्चरिंग (Destructuring) क्या है?
उत्तर:
डिस्ट्रक्चरिंग का उपयोग एरे या ऑब्जेक्ट से मान निकालने के लिए किया जाता है।

25. सिंक्रोनस और असिंक्रोनस कोड में क्या अंतर है?
उत्तर:

सिंक्रोनस: कोड क्रम में चलता है।
असिंक्रोनस: कोड अगले कार्य को ब्लॉक किए बिना चलता है।
क्या आप और भी प्रश्नों की सूची चाहते हैं


#### javascript question ? ################

What is JavaScript?
Answer:
JavaScript is a lightweight, interpreted, or JIT-compiled programming language used for creating dynamic and interactive web pages.

2. What are the different data types in JavaScript?
Answer:
Primitive types: String, Number, Boolean, Undefined, Null, Symbol, BigInt.
Non-primitive types: Object (includes arrays and functions).

3. What is the difference between let, var, and const?
Answer:

var: Function-scoped, hoisted with undefined value.
let: Block-scoped, cannot be redeclared.
const: Block-scoped, cannot be reassigned or redeclared.

4. Explain the difference between == and ===.
Answer:

== checks equality after type conversion.
=== checks strict equality without type conversion.

5. What are JavaScript functions?
Answer:
Functions are blocks of code designed to perform a particular task. They can take parameters and return values.
Example:

javascript
Copy code
function add(a, b) {
  return a + b;
}
6. What is a callback function?
Answer:
A callback is a function passed as an argument to another function, executed after the completion of the parent function.
Example:

javascript
Copy code
function greet(name, callback) {
  callback(name);
}
greet("Alice", (name) => console.log("Hello " + name));

7. What is the difference between undefined and null?
Answer:

undefined: A variable that has been declared but not assigned a value.
null: Represents an intentional absence of value.
8. What are JavaScript closures?
Answer:
Closures allow a function to access variables from its outer scope even after the outer function has executed.
Example:

javascript
Copy code
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const increment = outer();
console.log(increment()); // 1
9. What is hoisting?
Answer:
Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.

10. What are template literals in JavaScript?
Answer:
Template literals are strings enclosed in backticks (`) that allow embedded expressions using ${}.
Example:

javascript
Copy code
const name = "Alice";
console.log(Hello, ${name}!);
11. What are JavaScript objects?
Answer:
Objects are collections of key-value pairs.
Example:

javascript
Copy code
const person = { name: "Alice", age: 25 };
12. What is an array in JavaScript?
Answer:
An array is a collection of elements stored in a single variable.
Example:

javascript
Copy code
const fruits = ["Apple", "Banana", "Cherry"];
13. What is an arrow function?
Answer:
Arrow functions are a concise way to write functions. They don't have their own this context.
Example:

javascript
Copy code
const add = (a, b) => a + b;
14. What is the difference between map() and forEach()?
Answer:

map(): Returns a new array.
forEach(): Iterates over elements but doesn't return a new array.
15. What is the purpose of typeof?
Answer:
typeof is used to check the type of a variable.
Example:

javascript
Copy code
console.log(typeof "Hello"); // string

16. What are JavaScript promises?
Answer:
Promises handle asynchronous operations. They can be in one of three states: Pending, Resolved, or Rejected.

17. What is an event in JavaScript?
Answer:
An event is an interaction, like a click or a keypress, that can trigger a JavaScript function.

18. What is this in JavaScript?
Answer:
this refers to the object that is currently executing the code.

19. What is DOM in JavaScript?
Answer:
DOM (Document Object Model) represents the structure of an HTML document, allowing JavaScript to manipulate HTML elements.

20. What is the use of setTimeout()?
Answer:
setTimeout() executes a function after a specified delay.
Example:

javascript
Copy code
setTimeout(() => console.log("Hello"), 1000);
21. What is setInterval()?
Answer:
setInterval() repeatedly executes a function at specified intervals.
Example:

javascript
Copy code
setInterval(() => console.log("Hi"), 1000);
22. What is NaN in JavaScript?
Answer:
NaN stands for "Not-a-Number" and represents an invalid number.
Example:

javascript
Copy code
console.log("a" / 2); // NaN
23. What are JavaScript modules?
Answer:
Modules allow code to be divided into reusable chunks.
Example:

javascript
Copy code
export const greet = () => console.log("Hello");
// Import using: import { greet } from './file.js';
24. What is event bubbling?
Answer:
Event bubbling is the propagation of an event from the child element to its parent.

25. What is a pure function?
Answer:
A pure function always returns the same output for the same input and has no side effects.

26. What is the spread operator?
Answer:
The spread operator (...) expands iterable elements.
Example:

javascript
Copy code
const arr = [1, 2, 3];
console.log([...arr, 4]); // [1, 2, 3, 4]
27. What is destructuring?
Answer:
Destructuring extracts values from arrays or objects into variables.
Example:

javascript
Copy code
const [a, b] = [1, 2];
const { name } = { name: "Alice" };
28. What are JavaScript events?
Answer:
Events are interactions that a user or browser triggers, like click, mouseover, or load.

29. What is a promise chain?
Answer:
A promise chain allows multiple asynchronous operations to run sequentially.
Example:

javascript
Copy code
fetch("url")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
30. What is the difference between synchronous and asynchronous code?
Answer:

Synchronous: Code executes line by line.
Asynchronous: Code doesn't block further execution while waiting for a task to complete.
Would you like detailed explanations or examples for any of these?

##### advance question #########################

What is the difference between == and === in JavaScript?

== (Abstract Equality): Compares values after type coercion.
Example:
javascript
Copy code
'5' == 5; // true
=== (Strict Equality): Compares values without type coercion.
Example:
javascript
Copy code
'5' === 5; // false

What is the Event Loop in JavaScript?

The event loop is a mechanism that manages the execution of code, handles callbacks, and performs non-blocking operations.
Tasks are divided into:
Call Stack: Where functions are executed.
Task Queue: Stores callback functions from asynchronous operations (e.g., setTimeout).
Example:
javascript
Copy code
console.log('Start');
setTimeout(() => console.log('Callback'), 0);
console.log('End');
// Output: Start, End, Callback

What is a Closure?

A closure is a function that retains access to its lexical scope even when executed outside its scope.
Example:
javascript
Copy code
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

Explain this keyword in JavaScript.

this refers to the context in which a function is executed.
In global scope: this refers to window or global object.
In object methods: this refers to the object.
In arrow functions: this is lexically bound to its enclosing scope.
Example:
javascript
Copy code
const obj = {
    name: 'Alice',
    greet: function() {
        console.log(this.name);
    },
};
obj.greet(); // Alice

What is the difference between var, let, and const?

var: Function-scoped, can be re-declared, hoisted but uninitialized.
let: Block-scoped, cannot be re-declared, hoisted but not initialized.
const: Block-scoped, must be initialized, cannot be reassigned.
Example:
javascript
Copy code
let x = 10;
const y = 20;
var z = 30;
Object-Oriented Programming

What are Prototypes in JavaScript?

Every object in JavaScript has an internal link to another object called its prototype.
Prototype allows inheritance of methods and properties.
Example:
javascript
Copy code
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(Hello, ${this.name});
};
const person = new Person('John');
person.greet(); // Hello, John

What are Classes in JavaScript?

Classes are syntactic sugar over prototypes to implement object-oriented programming.
Example:
javascript
Copy code
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(${this.name} makes a sound.);
    }
}
const dog = new Animal('Dog');
dog.speak(); // Dog makes a sound.

What is the difference between Object.create() and new keyword?

Object.create(): Creates a new object with the specified prototype.
new keyword: Creates an object and links it to the prototype of the constructor function.
Example:
javascript
Copy code
const proto = { greet: () => 'Hello' };
const obj1 = Object.create(proto);
function Constructor() {}
const obj2 = new Constructor();
Asynchronous Programming

What is the difference between setTimeout and setInterval?

setTimeout: Executes a function after a specified delay.
setInterval: Repeatedly executes a function at specified intervals.
Example:
javascript
Copy code
setTimeout(() => console.log('Timeout'), 1000);
setInterval(() => console.log('Interval'), 1000);

What are Promises, and how do they work?

Promises are used to handle asynchronous operations in JavaScript.
They have three states: Pending, Fulfilled, Rejected.
Example:
javascript
Copy code
const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) resolve('Success');
    else reject('Error');
});
promise
    .then(result => console.log(result))
    .catch(error => console.log(error));

What is async/await, and how is it used?

async/await is syntactic sugar for handling Promises.
Example:
javascript
Copy code
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}
fetchData();
Modern JavaScript Features

What is Destructuring in JavaScript?

Destructuring allows unpacking values from arrays or properties from objects.
Example:
javascript
Copy code
const [a, b] = [1, 2];
const { name, age } = { name: 'Alice', age: 25 };
console.log(a, b, name, age); // 1 2 Alice 25

What are Arrow Functions, and how do they differ from regular functions?

Arrow functions are a concise syntax for function expressions.
They do not have their own this.
Example:
javascript
Copy code
const greet = () => 'Hello';

What is the spread operator, and how is it used?

The spread operator (...) allows copying or combining arrays/objects.
Example:
javascript
Copy code
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

What is the difference between map(), filter(), and reduce()?

map(): Transforms each element in an array.
filter(): Filters elements based on a condition.
reduce(): Reduces an array to a single value.
Example:
javascript
Copy code
const numbers = [1, 2, 3];
const squares = numbers.map(n => n * n); // [1, 4, 9]
const evens = numbers.filter(n => n % 2 === 0); // [2]
const sum = numbers.reduce((a, b) => a + b, 0); // 6
Let me know if you want explanations on any specific topic!

एडवांस जावास्क्रिप्ट सवाल और जवाब
कोर कॉन्सेप्ट्स
== और === में क्या अंतर है?

== (एब्सट्रैक्ट इक्वैलिटी): वैल्यूज़ को टाइप कोर्सन के बाद तुलना करता है।
उदाहरण:
javascript
Copy code
'5' == 5; // true
=== (स्ट्रिक्ट इक्वैलिटी): वैल्यूज़ को बिना टाइप कोर्सन के तुलना करता है।
उदाहरण:
javascript
Copy code
'5' === 5; // false
इवेंट लूप (Event Loop) क्या है?

इवेंट लूप एक मैकेनिज़म है जो कोड की एक्जीक्यूशन को मैनेज करता है, कॉलबैक फंक्शन्स को हैंडल करता है, और नॉन-ब्लॉकिंग ऑपरेशन्स करता है।
इसमें दो मुख्य भाग होते हैं:
कॉल स्टैक: जहाँ फंक्शन्स एक्जीक्यूट होते हैं।
टास्क क्यू: यह असिंक्रोनस ऑपरेशन्स (जैसे setTimeout) से कॉलबैक फंक्शन्स को स्टोर करता है।
उदाहरण:
javascript
Copy code
console.log('Start');
setTimeout(() => console.log('Callback'), 0);
console.log('End');
// Output: Start, End, Callback
क्लोजर (Closure) क्या है?

क्लोजर एक ऐसी फंक्शन होती है जो अपनी लेक्सिकल स्कोप को तब भी बनाए रखती है जब उसे उसकी स्कोप से बाहर एक्सेक्यूट किया जाता है।
उदाहरण:
javascript
Copy code
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
this की भूमिका क्या है?

this उस संदर्भ को दर्शाता है जिसमें फंक्शन एक्जीक्यूट हो रही है।
ग्लोबल स्कोप में: this window या global को संदर्भित करता है।
ऑब्जेक्ट मेथड्स में: this उस ऑब्जेक्ट को संदर्भित करता है।
ऐरो फंक्शन्स में: this लेक्सिकल स्कोप से बाइंड होता है।
उदाहरण:
javascript
Copy code
const obj = {
    name: 'Alice',
    greet: function() {
        console.log(this.name);
    },
};
obj.greet(); // Alice
var, let, और const में क्या अंतर है?

var: फंक्शन-स्कोप्ड, पुनः घोषित किया जा सकता है, होइस्टेड लेकिन अनइनीशियलाइज्ड।
let: ब्लॉक-स्कोप्ड, पुनः घोषित नहीं किया जा सकता, होइस्टेड लेकिन अनइनीशियलाइज्ड।
const: ब्लॉक-स्कोप्ड, हमेशा इनिशियलाइज्ड होना चाहिए, फिर से असाइन नहीं किया जा सकता।
उदाहरण:
javascript
Copy code
let x = 10;
const y = 20;
var z = 30;
ऑब्जेक्ट-ऑरिएंटेड प्रोग्रामिंग (OOP)
प्रोटोटाइप्स (Prototypes) क्या होते हैं?

हर जावास्क्रिप्ट ऑब्जेक्ट का एक इंटरनल लिंक होता है, जिसे उसका प्रोटोटाइप कहा जाता है।
प्रोटोटाइप इनहेरिटेंस को सपोर्ट करता है।
उदाहरण:
javascript
Copy code
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(Hello, ${this.name});
};
const person = new Person('John');
person.greet(); // Hello, John
जावास्क्रिप्ट में क्लासेस (Classes) क्या हैं?

क्लासेस जावास्क्रिप्ट में ऑब्जेक्ट-ऑरिएंटेड प्रोग्रामिंग को लागू करने के लिए प्रोटोटाइप्स के ऊपर एक सिंटैक्सिक शुगर हैं।
उदाहरण:
javascript
Copy code
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(${this.name} makes a sound.);
    }
}
const dog = new Animal('Dog');
dog.speak(); // Dog makes a sound.
Object.create() और new में क्या अंतर है?

Object.create(): यह एक नया ऑब्जेक्ट बनाता है और उसे निर्दिष्ट प्रोटोटाइप से लिंक करता है।
new कीवर्ड: यह एक ऑब्जेक्ट बनाता है और उसे कंस्ट्रक्टर फंक्शन के प्रोटोटाइप से लिंक करता है।
उदाहरण:
javascript
Copy code
const proto = { greet: () => 'Hello' };
const obj1 = Object.create(proto);
function Constructor() {}
const obj2 = new Constructor();
असिंक्रोनस प्रोग्रामिंग
setTimeout और setInterval में क्या अंतर है?

setTimeout: एक निश्चित देरी के बाद एक फंक्शन को एक बार चलाता है।
setInterval: एक निश्चित अंतराल पर फंक्शन को बार-बार चलाता है।
उदाहरण:
javascript
Copy code
setTimeout(() => console.log('Timeout'), 1000);
setInterval(() => console.log('Interval'), 1000);
प्रॉमिस (Promises) क्या हैं और ये कैसे काम करते हैं?

प्रॉमिस असिंक्रोनस ऑपरेशन्स को हैंडल करने के लिए उपयोग किए जाते हैं।
उनके तीन राज्य होते हैं: Pending, Fulfilled, Rejected।
उदाहरण:
javascript
Copy code
const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) resolve('Success');
    else reject('Error');
});
promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
async/await क्या है और इसे कैसे उपयोग करें?

async/await प्रॉमिसेस को हैंडल करने के लिए सिंटैक्सिक शुगर है।
उदाहरण:
javascript
Copy code
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}
fetchData();
मॉडर्न जावास्क्रिप्ट फीचर्स
डेस्ट्रक्चरिंग (Destructuring) क्या है?

डेस्ट्रक्चरिंग का उपयोग ऐरे या ऑब्जेक्ट्स से वैल्यूज़ को अनपैक करने के लिए किया जाता है।
उदाहरण:
javascript
Copy code
const [a, b] = [1, 2];
const { name, age } = { name: 'Alice', age: 25 };
console.log(a, b, name, age); // 1 2 Alice 25
ऐरो फंक्शन्स (Arrow Functions) क्या हैं और ये सामान्य फंक्शन्स से कैसे अलग हैं?

ऐरो फंक्शन्स फंक्शन एक्सप्रेशंस के लिए संक्षिप्त सिंटैक्स हैं।
इनमें अपना this नहीं होता।
उदाहरण:
javascript
Copy code
const greet = () => 'Hello';
स्प्रेड ऑपरेटर (Spread Operator) क्या है और इसका उपयोग कैसे करें?

स्प्रेड ऑपरेटर (...) का उपयोग ऐरे/ऑब्जेक्ट्स को कॉपी करने या जोड़ने के लिए किया जाता है।
उदाहरण:
javascript
Copy code
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
map(), filter() और reduce() में क्या अंतर है?

map(): ऐरे के हर एलिमेंट को ट्रांसफॉर्म करता है।
filter(): एक कंडीशन के आधार पर ऐरे के एलिमेंट्स को फिल्टर करता है।
reduce(): ऐरे को एक सिंगल वैल्यू में संकुचित करता है।
उदाहरण:


Advanced Questions:


What is Semantic HTML, and why is it important?

Semantic HTML: Uses meaningful tags (like <header>, <footer>, <article>, <section>) to define the structure of the content.
Importance:
Improves accessibility.
Helps search engines understand the page structure.
Enhances maintainability of the code.
Example:
html
Copy code
<article>
    <header>Introduction</header>
    <p>This is semantic HTML.</p>
</article>

What is the difference between <section> and <div>?

<section>: Defines a thematic grouping of content with a heading. It has semantic meaning.
<div>: A generic container with no inherent meaning.

What are custom data attributes in HTML?

Data attributes start with data- and allow embedding custom information into HTML elements.
Example:
html
Copy code
<button data-user-id="123">Click Me</button>

You can access these attributes using JavaScript:
javascript
Copy code
const userId = document.querySelector('button').dataset.userId;
console.log(userId); // Output: 123

What is the difference between defer and async attributes in the <script> tag?

defer: Script execution is delayed until the HTML parsing is complete. Scripts are executed in order.
async: Script is executed as soon as it is downloaded, without waiting for HTML parsing to complete. Scripts may execute out of order.
Example:
html
Copy code
<script src="script.js" defer></script>
<script src="script.js" async></script>

What are Web Components?

Web Components are reusable custom elements created using:

Custom Elements: Define new HTML tags.
Shadow DOM: Encapsulates styles and DOM elements.
HTML Templates: Create reusable HTML structures.
Example:
html
Copy code
<template id="my-template">
    <style>
        p { color: red; }
    </style>
    <p>This is a Web Component</p>
</template>

What is the <template> element in HTML?

The <template> element is used to define reusable HTML fragments that are not rendered immediately.
Example:
html
Copy code
<template id="greeting">
    <p>Hello, World!</p>
</template>
<script>
    const template = document.getElementById('greeting');
    document.body.appendChild(template.content.cloneNode(true));
</script>

What is the purpose of the <picture> element?

The <picture> element allows specifying multiple image sources for responsive design.
Example:
html
Copy code
<picture>
    <source media="(max-width: 600px)" srcset="small.jpg">
    <source media="(max-width: 1200px)" srcset="medium.jpg">
    <img src="default.jpg" alt="Responsive Image">
</picture>

What is the difference between localStorage and sessionStorage?

localStorage: Data persists even after the browser is closed.
sessionStorage: Data is cleared when the session (tab or window) is closed.

What is the purpose of the contenteditable attribute?

It makes an element editable directly in the browser.
Example:
html
Copy code
<div contenteditable="true">Edit this text</div>

What are HTML5 Form Validation attributes?

HTML5 provides attributes for client-side validation:

required: Ensures the field is not empty.
pattern: Validates input against a regex pattern.
min and max: For numeric inputs.
maxlength: Restricts character count.
Example:
html
Copy code
<input type="text" required pattern="[A-Za-z]+" maxlength="10">
Performance and Optimization:

What is Lazy Loading in HTML?

Lazy Loading delays the loading of images or iframes until they are visible in the viewport.
Example:
html
Copy code
<img src="image.jpg" loading="lazy" alt="Lazy Loaded Image">

What is the purpose of the <meta> tag?

Provides metadata about the HTML document (e.g., viewport settings, charset).
Example:
html
Copy code
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="UTF-8">

What are Microdata and ARIA roles in HTML?

Microdata: Provides semantic meaning to content for search engines.
ARIA Roles: Enhance accessibility for users with disabilities.
Example:
html
Copy code
<div role="button" tabindex="0">Accessible Button</div>

What is the <iframe> tag, and how can you secure it?

The <iframe> tag embeds external content into a webpage.
Security Measures:
Use the sandbox attribute to restrict actions.
Use allow attribute for specific permissions.
Example:
html
Copy code
<iframe src="example.com" sandbox="allow-scripts"></iframe>

What is the difference between <b> and <strong>, <i> and <em>?

<b> vs <strong>: <b> represents bold text without extra importance, while <strong> indicates text with strong importance.
<i> vs <em>: <i> represents italic text without emphasis, while <em> indicates text with emphasis.
Best Practices:

What is Progressive Enhancement in HTML?

Start with a basic, functional version of the page and add advanced features for modern browsers.
What is the purpose of the rel="noopener noreferrer" attribute in anchor tags?

Prevents security risks (e.g., phishing) when opening links in a new tab.
Example:
html
Copy code
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a>

How can you improve HTML performance?

Use minified HTML.
Use lazy loading for images.
Reduce DOM size.
Use CDN-hosted libraries.

What is Shadow DOM, and why is it used?

Shadow DOM is part of Web Components and encapsulates DOM and styles to avoid conflicts.
What is the difference between <script> at the head and body?

Scripts in <head> block HTML rendering until they are loaded.
Scripts in <body> load after the content is rendered, improving page load speed.
Let me know if you’d like more information on any specific question!





