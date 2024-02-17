// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


// • Tests for equality and inequality with strings
let fruit1:string = "Apple";
let fruit2:string = "Litchi";

console.log("Equality test with strings::",fruit1 === "Litchi");
console.log("Inequality test with strings:",fruit2 !== "Apple");


// • Tests using the lower case function
let mixedCaseString = "HelloWorld";

console.log("Test no 1:",mixedCaseString.toLowerCase() === "helloworld");  
console.log("Test no 2:", mixedCaseString.toLowerCase() === "hello world");


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let numberA = 10;
let numberB = 20;

console.log("Equality test with numbers:", numberA === 10);
console.log("Inequality test with numbers:", numberB !== 20);
console.log("Greater than test:", numberA < numberB);
console.log("Less than test:", numberA > numberB);
console.log("Greater than or equal to test:", numberA >= numberB);
console.log("Less than or equal to test:", numberA <= numberB);


// • Tests using "and" and "or" operators
let condition1: boolean = true;
let condition2: boolean = false;

console.log("And operator Test", condition1 && condition2);
console.log("OR operator Test", condition1 || condition2);


// • Test whether an item is in a array

let array: string[] = ["Apple", "Banana", "Orange", "Litchi"];
console.log("Item in array test:", array.includes("Orange"));

// • Test whether an item is not in a array
console.log("Item not in array test:", array.includes("Mango"));



