// let heading = document.getElementsByClassName("heading")
// console.log(heading);


// let headings = document.getElementsByClassName("heading-class")
// console.log(headings);

const btn = document.getElementById("openModalBtn")
const modal = document.getElementById("myModal")
const span = document.getElementsByClassName("close")


btn.onclick = function(){
   modal.style.display = "block"
   console.log("prince");
}

span.onclick = function(){
    modal.style.display = "none"
    console.log("prince singh");
}


// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }