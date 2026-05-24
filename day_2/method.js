const numbers = [0, 1, 2 , 3, 4, 5];
console.log(numbers);
const double = numbers.map(a => a * 2);
console.log(double);
//^^^ use of map() to transform array

const even = numbers.filter(a => a % 2 === 0);
console.log(even);
//^^^ use of filter() to filter some elements

numbers.forEach(num => {
    console.log(num);
});
//^^^use of forEach() as a loop alternative;

const users =[
    { name : "Tasib" },
    { name : "Shafin" }
];

const user = users.find(u => u.name === "Shafin");
console.log(user);

const num = numbers.find(n => n === 3);
console.log(num);
//^^^ use of find() to find a match;