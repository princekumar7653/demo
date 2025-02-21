// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //const newNum = myNums.map((num)=> num + 8)

// const newNum = myNums
//                 .map( (num) => num * 10 )
//                 .map( (num) => num + 1 )
//                 .filter( (num) => num >= 40 )

// console.log(newNum);

const total = [1, 2, 3, 4]

// const myTotal = total.reduce( function (accumulator, currentvalue){
//     console.log(`accu: ${accumulator} and curr: ${currentvalue}`);
//     return accumulator + currentvalue
// }, 0 )

//const myTotal = total.reduce( (accu, curr) => accu + curr , 0 )

//console.log(myTotal);


const shopingCart = [
    {
        itemName: 'shirt',
        price: 556
    },
    {
        itemName: 'jeans',
        price: 766
    },
    {
        itemName: 'T-shirt',
        price: '956'
    },
]

const totalShopingCart = shopingCart.reduce( (accu, item) => accu + item.price, 0 )

// console.log(totalShopingCart);

