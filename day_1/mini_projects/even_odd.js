const prompt = require("prompt-sync") () ;
let number = Number(prompt("input a integer number:  "));
if (number % 2 === 0) {
    console.log("It's a even number");
} else if (number % 2 === 1) {
    console.log("It's a odd number");
} else {
    console.log("you haven't put a integer number");
}