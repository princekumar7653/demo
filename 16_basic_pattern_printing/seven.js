 
// pattern printing

// Q.no 1
// 54321
// 4321
// 321
// 21
// 1

let i,j;

for(i=5;i>=1;i--){
    let row = ""
    for(j=i;j>=1;j--){
        row += j
    }
    // console.log(row);
    
}



// Q.no 2
// 54321
// 5432
// 543
// 54
// 5
for(i=1;i<=5;i++){
    let row = ""
    for(j=5;j>=i;j--){
        row += j
    }
    // console.log(row);
    
}

// Q.no 3
// 1
// 10
// 101
// 1010
// 10101


for(i=1;i<=5;i++){
    let row = ""
    for(j=1;j<=i;j++){
        row += (j%2!=0) ?"1": "0"
    }
    // console.log(row);
    
}

// Q.no 4
// 1
// 23
// 456
// 78910

let num = 1

for(i=1;i<=4;i++){
    let row = ""
    for(j=1;j<=i;j++){
        row += num
        num++
    }
    // console.log(row);
    
}

// Q.no 5

// 1
// 21
// 321
// 4321
// 54321

for(i=1;i<=5;i++){
    let row = ""
    for(j=i;j>=1;j--){
        row += j
    }
    // console.log(row);
    
}

// Q.no 6

// 1
// 22
// 333
// 4444
// 55555


for(i=1;i<=5;i++){
    let row = ""
    for(j=i;j>=1;j--){
        row += i
    }
    // console.log(row);
    
}

// Q.no 7 

// 11111
// 2222
// 333
// 44
// 5


for(i=1;i<=5;i++){
    let row = ""
    for(j=5;j>=i;j--){
        row += i
    }
    // console.log(row);
    
}

// solve Q.no 8 
// 12345
// 2345
// 345
// 45
// 5

for(i=1;i<=5;i++){
    let row = ""
    for(j=i;j<=5;j++){
        row += j
    }
    // console.log(row);
    
}

// solve Q.no 9
// A
// BB
// CCC
// DDDD
// EEEEE

for(i=1;i<=5;i++){
    let row = ""
    let char = String.fromCharCode(64 + i);
    for(j=i;j>=1;j--){
        row += char
    }
    // console.log(row);
    
}

// solve Q.no 10
// AAAAA
// BBBB
// CCC
// DD
// E

for(i=1;i<=5;i++){
    let row = ""
    let char = String.fromCharCode(64 + i);
    for(j=i;j<=5;j++){
        row += char
    }
    console.log(row);
    
}
