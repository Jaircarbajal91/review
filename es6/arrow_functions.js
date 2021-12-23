/** ARROW FUNCTIONS
  Arrow functions -  also called "fat arrow" functions, are a more concise syntax for writing function expressions. They utilize a new token =>, that looks like a fat arrow. Arrow functions are annonymous and change the way "this" binds in functions.
 */

// ES5
var es5 = function () { return 2; };

// ES6
let es6Func = () => 2;
// less code
// no function keyword
// () sometimes optional
// implicit return without curly braces

// Arrow functions - 1 parameter
let cubed;
cubed = x => x * x * x;
// OTHER OPTIONS
  // cubed = x => return { x * x * x; };
  // cubed = (x) => x * x * x;
// console.log(cubed(2))

let func1 = () => 'Hi';
let add = (a, b) => a + b;
// console.log(add(2, 4))

let numbers = [2, 4, 6, 8];
let es5Squared = numbers.map(function(num) {
  return num * 2;
})
// console.log(es5Squared)
let es6Cubed = numbers.map(num => num * 3);
console.log(es6Cubed)