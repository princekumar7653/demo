
// 1 1 1 1 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 1 1 1 1

let i,j;

for(i=0;i<5;i++){
    let row=""
    for(j=0;j<5;j++){
        if(i==0||i==5-1||j==0||j==5-1){
            row += "1"
            
        }else{
            row += "0"
            
        }
    }
    console.log(row);
    
}
