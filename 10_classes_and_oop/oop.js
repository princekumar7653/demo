const user = {
    userName: "prince",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user detailes from database");
        //    console.log(`username: ${this.userName}`);
        // console.log(this); // curent user

    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this) // {}

  function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }

    return this
  }

  const userOne = new User("prince", 12, true)
  const userTwo = new User("prince", 11, true)
  console.log(userOne);
  console.log(userTwo);

