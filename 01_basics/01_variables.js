const accountId = 1445;
let accountEmail = "kunal123@gmail.com";
var accountPassword = "12345";
accountCity = "Agartala";
let accountState;

// accountId = 2;

accountEmail = "kunal321@gmail.com";
accountPassword = "54321";
accountCity = "Bengaluru";

// console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
