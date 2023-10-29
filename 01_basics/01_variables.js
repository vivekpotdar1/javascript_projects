const accountId = 144553
let accountEmail = "abc@google.com"
var accountPassword = "12345"
accountCity = "Pune"

// accountId = 2 //Not Allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Mumbai"
let accountState;
console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])