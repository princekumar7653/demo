const arr = ['js', "java", "cpp", "python"]

// arr.forEach( function (item){
//     console.log(item);
// } );

// arr.forEach( (item) => {
//     console.log(item);
// } );

// function myPrint(val){
//     console.log(val);
// }

//arr.forEach (myPrint)

// arr.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } );

const myObject = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    },
]

myObject.filter( (item) => {
    console.log(item.languageName .languageFileName);
} );


