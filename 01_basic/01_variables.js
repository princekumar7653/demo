const accountId = 144553
let accountEmail = "prince@google.com"
var accountPassword = "12345"
accountcity = "jaipur"
let accountState

// accountId = 2 // not allowed

accountEmail = "pr@ince.com"
accountPassword = "212121"
accountcity = "delhi"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountcity, accountState]);