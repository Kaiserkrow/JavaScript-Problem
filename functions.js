const multiplyByTwo = (x) => x * 2; //arrow function

let num = 32;

console.log(multiplyByTwo(num));

const alphabet = ['A','B','C','D','E','F'];
const numbers = ['1','2','3','4','5','6'];

const [a,,b, ...d] = alphabet; //spread operator and using destructuring method

const newArray = [...alphabet, ...numbers];
console.log(a + b + " " + d); 
console.log(newArray);