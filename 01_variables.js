const accountId = 14553 //it cannot be changed 
let accountEmail = "xyz@gmail.com" 
var accountPassword = "12345"
accountCity="Bkt"
let accountState

// accountId = 2 //not allowed
accountEmail = "abc@gmail.com"
accountPassword ="11111"
accountCity = "Ktm"
console.log(accountId);
/*
prefer not to use var because of 
issue in block space and functional scope
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
