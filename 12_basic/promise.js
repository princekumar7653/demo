////////////// promises 
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("promise success full!");
    } else {
      reject("promise faild!");
    }
  },3000);
});
myPromise
.then(result => console.log(result))
.catch(error => console.log(error)
);

// setinterval method
let count = 0

let interval = setInterval(()=>{
    console.log("count", count);
    count++

    if(count=== 5){
        clearTimeout(interval)
        console.log("stop");
        
    }
    
},2000)

let myPromise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let success = false
        if(success){
            resolve("resolve success")
        }else{
            reject("faild")
        }
    },2000)
});
myPromise1
    // .then(result => console.log(result))
    // .catch(error => console.log(error));

    .then((result)=>{
        console.log(result);
        
    })
    .catch((error)=>{
        console.log(error);
        
    })



    function startInterval(duretion){
        return new Promise((resolve)=>{
            let count = 0
           let intervalid = setInterval(()=>{
                console.log("count", count);
                count++

                if(count === duretion){
                    clearInterval(intervalid)
                    console.log("stoped");
                    
                }
                
            }, 1000)
        })
    }


    startInterval(6)
    .then((result1)=>{
        console.log(result1);
        
    })





    function startInterval2 (duretion){
        return new Promise ((resolve)=>{
            let count = 0
            let interval1 = setInterval(()=>{
                console.log("counter", count);
                    count++
                if(count === duretion){
                    clearInterval(interval1)
                    console.log("stoped");
                }else{
                    
                    
                }
            }, 2000)
        })
    }

    startInterval2(9)
    .then((print)=>{
        console.log(print);
        
    })