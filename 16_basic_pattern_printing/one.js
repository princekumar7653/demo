
// 1 1 1 1 1
// 0 0 0 0 0
// 1 1 1 1 1
// 0 0 0 0 0
// 1 1 1 1 1

let i,j;

for(i=0;i<5;i++){
    let row = ""
    for(j=0;j<5;j++){
        row+=(i%2==0) ? "1":"0";  
    }
    console.log(row);
    
    
}