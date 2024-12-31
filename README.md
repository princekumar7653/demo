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
