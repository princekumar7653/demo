
// 0 0 0 0 0
// 0 1 1 1 0
// 0 1 1 1 0
// 0 1 1 1 0
// 0 0 0 0 0

let i,j;

for(i=0;i<5;i++){
    let row = ""
    for(j=0;j<5;j++){
        if(i==0||i==4||j==0||j==4){
            row += "0"
        }else{
            row += "1"
        }
    }
    console.log(row);
    
}