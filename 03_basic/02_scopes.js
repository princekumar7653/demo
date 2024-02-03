

let c = 43 // globle-scope
if (true){  // block-scope
    let a = 30
    const b = 40
    //var c = 50
    //console.log("binner:", a);
}

//console.log(a)
//console.log(b)
//console.log(c)

// const arr1 = [56, 78, 89, 34, 98, 45]

// for (let index = 0; index < arr1.length; index++) {
//     const element = arr1[index];
//     console.log(arr1[index]);
// }


function one(){
    const username = "prince"

    function two(){
        const website = "youtube"
        //console.log(username);
    }

    //console.log(website);

    //two()
}

one()


//*********************************** interesting *****************************


console.log(addOne(5))
function addOne(num){
    return num + 1
}



const addTwo = function (num){
    return num + 2
}
console.log(addTwo(5))
