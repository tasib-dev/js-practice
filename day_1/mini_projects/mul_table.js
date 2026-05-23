const prompt = require("prompt-sync") ();
let number = Number(prompt("Input a number ; "));

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}