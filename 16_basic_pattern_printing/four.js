
// 1 1 1 1 1
// 1     1
// 1     1
// 1     1
// 1 1 1 1 1

let i,j;

for(i=0;i<5;i++){
    let row = ""
    for(j=0;j<5;j++){
        if(i==0||i==4||j==0||j==3){
            row += "1"
        }else{
            row += " "
        }
    }
    console.log(row);
    
}
