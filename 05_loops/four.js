const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"

}

for (const key in myObject) {
    console.log(key);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
    console.log(`${key} shortcut is for ${programming[key]}`);
}
