function add(a, b) {
    return a + b ;
}

let a = add(2, 3);
console.log(`the sum is ${a}`);

//arrow functions----

const mul = (a, b) => {
    return a*b;
}

console.log(`the product is ${mul(2, 3)}`);

const diff = (a, b) => a - b;
console.log(`the difference is ${diff(1, 2)}`);

//vvv
const greet = function() {
    console.log("Hello");
};
greet();
//^^^in js , functions are treated like values;