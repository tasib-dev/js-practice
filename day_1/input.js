const prompt = require("prompt-sync") ();
let name = prompt("Enter your name : ");
console.log(`Hello ${name}, how are you?`);
console.log(`How old are you?`);
let age = prompt();
console.log(`ok then , you're ${age} years old`);