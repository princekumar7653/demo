// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

// let div = document.querySelector("div");

// div.style.backgroundColor = "green"
// div.style.color = "yellow"
// div.style.border = "4px solid red"
// div.style.fontStyle = "italic"
// div.style.textAlign = "center"
// div.style.margin = "auto"
// div.style.visibility = "hidden"
// div.innerText = "prince singh"

// let newBtn = document.createElement("button")
// newBtn.innerText = "click me!"
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn) // div ke andar item ke niche button aayega
// div.prepend(newBtn); // div ke andar sabse uper button aayega
// div.before(newBtn); // div ke bahr uper me button aayega
// div.after(newBtn) // div bahr niche button aayega
// div.style.textAlign = "center" // div ke andr hi button ko center krega

// let p = document.querySelector("p");
// p.append(newBtn) // inline paragraph ke end  me button aayega
// p.prepend(newBtn) // inline paragraph ke first me button aayega
// p.before(newBtn) // paragraph ke uper button aayega
// p.after(newBtn) // paragraph ke niche button aayega

// let newHeading = document.createElement("h1")
// newHeading.innerHTML = "<i>what is your name </i>"

// document.querySelector("body").prepend(newHeading)

// let para = document.querySelector("p").remove()

// newHeading.remove()


let newBtn = document.createElement("button");
newBtn.innerText = "click me!"

newBtn.style.backgroundColor = "red"
newBtn.style.color = "white"

document.querySelector("body").prepend(newBtn);


let para = document.querySelector("p");

para.classList.add("newClass");

para.style.backgroundColor = "green"
para.style.fontSize = "45px"







