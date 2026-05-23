let i = 0;
const prompt = require("prompt-sync") ();
let balance = Number(prompt("Set a starting balance :   "));

while (i === 0) {
console.log("Which options do you want? (just press 1 , 2 or 3) ");
console.log("1. Show balance");
console.log("2. Deposit");
console.log("3. Withdraw");
console.log("4. Exit");
let choice = Number(prompt());

if (choice === 1) {
    console.log(`your current balance is ${balance}`);
} else if (choice === 2) {
    let deposit = Number(prompt("How much amount do you want to deposit?"));
    balance = balance + deposit;
} else if (choice === 3) {
    let withdraw = Number(prompt("How much amount you want to withdraw?"));
    if(withdraw <= balance) {
        balance = balance - withdraw; 
    } else {
        console.log("Not enough balance in your account");
    }
} else if (choice === 4) {
    i = 1;
} else {
    console.log("Wrong choice");
}

console.log("Thank you");
 

}