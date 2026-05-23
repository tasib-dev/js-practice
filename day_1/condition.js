const prompt = require("prompt-sync") () ;
let age = prompt(`What's your age?  `);
if (age < 18) {
    console.log(`you are too young to enter`);
} else if (age > 60) {
    console.log(`you're too old to enter`);
} else {
    console.log(`welcome`);
}
