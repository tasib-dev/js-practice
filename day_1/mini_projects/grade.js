const prompt = require("prompt-sync") ();
let number = Number(prompt("what is your percentage?  "));

if (number <= 100 && number >= 80) {
    console.log("your grade is A");
} else if (number < 80 && number >= 60) {
    console.log("your grade is B");
} else if (number < 60 && number >= 30) {
    console.log("your grade is C");
} else if (number >= 0 && number <30) {
    console.log("you failed");
} else {
    console.log("you are out of universe!!!");
}