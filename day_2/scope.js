let name = "Tasib";

function show() {
    console.log(name);
}

show();
//^^^upside all is global scope

function test() {
    let age = 18;
    console.log(age);
}
test();
//console.log(age);
//^^^this line gives error , as age is a local scope

if (true) {
    let x = 3;
    console.log(x);
}
//console.log(x);
//^^^this gives error as it was block scoped