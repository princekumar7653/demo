// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } );

//console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums = myNums.filter( (nums) => nums >= 4 )
// console.log(newNums);

//const newNums = myNums.filter( (nums) =>{
   // return nums >= 4 
    //} );

    //console.log(newNums);


    // const newNums = []

    // myNums.forEach((num)=> {
    //     if(num > 5){
    //         newNums.push(num)
    //     }
    // });

    // console.log(newNums);

   const books = [
    {title: 'Book one',genre: 'fiction',publish: '1981',edition: '2004'},
    {title: 'Book two',genre: 'none-fiction',publish: '1981',edition: '2018'},
    {title: 'Book three',genre: 'history',publish: '1981',edition: '2005' },
    {title: 'Book four',genre: 'fiction',publish: '1991',edition: '2009'},
    {title: 'Book five',genre: 'science',publish: '1986',edition: '2008'},
    {title: 'Book six',genre: 'history',publish: '1989',edition: '2001'},
    {title: 'Book seven',genre: 'science',publish: '1985',edition: '2009'},
    {title: 'Book eight',genre: 'non-fiction',publish: '1988',edition: '2006'},
    {title: 'Book nine',genre: 'science',publish: '2001',edition: '2014'},
    {title: 'Book ten',genre: 'history',publish: '2011',edition: '2010'},
    ] 

    let userBook = books.filter((bk)=> bk.genre === 'science')

     userBook = books.filter((bk)=> {
        return bk.publish >= 1988 && bk.genre === 'history'})

    console.log(userBook);



