const prompt = require("prompt-sync") ();
let num1 = Number(prompt(`Enter your first number: `));
let num2 = Number(prompt(`Enter your second number : `));
let op = prompt(`Which operations do you want?  `);

if (op === "+") {
    console.log(`The sum is ${num1 + num2}`);
} else if (op === "-") {
    console.log(`the difference is ${num1 - num2}`);
} else if(op === "*") {
    console.log(`the product is ${num1 * num2}`);
} else if (op === "/") {
    if (num2 === 0) {
        console.log("Can't devide by zero");
    } else {
        console.log(`the quotient is ${num1 / num2}`);
    }
} else {
    console.log("Wrong input");
} 