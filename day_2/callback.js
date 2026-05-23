function greet(name) {
    console.log(`Hello ${name}`);
};

function user(back) {
    back("Tasib");
};

user(greet);

function test(age) {
    console.log(`I'm ${age} years old`);
};

user(test);

function user(anything) {
    anything("Tasib");
};

user(test);