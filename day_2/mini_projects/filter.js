const students = [
    {name: "Tasib", Marks : 87},
    {name: "Tabib", Marks : 76},
    {name: "Shafin", Marks : 56},
    {name: "Abdullah", Marks : 32},
    {name: "Tuba", Marks : 15},
];

const passed = students.filter(students => students.Marks >= 33);
console.log("These are the passed students----");
console.log(passed);

const failed = students.filter(students => students.Marks < 33);
console.log("And these are the failed students");
console.log(failed);