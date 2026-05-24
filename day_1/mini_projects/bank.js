const prompt = require("prompt-sync") ();
const users = [
    {
        name : "Tasib",
        username : "akt629201",
        pin : 1234,
        balance : 3000
    }
];
let username = prompt("What is your username?  ");
let password = Number(prompt("What's your password? "));
if ((username === users[0].username) && (password === users[0].pin)) {

    let i = 0;
    while (i === 0) {
    console.log("Which options do you want? (just press 1 , 2 or 3) ");
    console.log("1. Show balance");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. Exit");
    let choice = Number(prompt());
    if (choice === 1) {
        console.log(`your current balance is ${users[0].balance}`);
    } else if (choice === 2) {
        let deposit = Number(prompt("How much amount do you want to deposit?  "));
        users[0].balance = users[0].balance + deposit;
    } else if (choice === 3) {
        let withdraw = Number(prompt("How much amount you want to withdraw?  "));
        if(withdraw <= users[0].balance) {
            users[0].balance = users[0].balance - withdraw; 
        } else {
            console.log("Not enough balance in your account");
        }
    } else if (choice === 4) {
        i = 1;
    } else {
        console.log("Wrong choice");
    }
    }
    console.log("Thank you");
} else {
    console.log("Wrong username or password");
}