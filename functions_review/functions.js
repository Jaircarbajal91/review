// Function expressions, Anonymous functions, IIFE

// MDN
// A function expression is very similar to and has almost the same syntax as a function declaration (see function statement for details). The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.

// A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.

// Function declaration
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
// factorial(4);


// Anonymous Function
const count = function(array) { // Function expression
  return array.length;
}
const methods = {
  numbers: [1, 5, 8],
  sum: function() { // Function expression
    return this.numbers.reduce(function(acc, num) { // func. expression
      return acc + num;
    });
  }
}
count([5, 7, 8]); // => 3
methods.sum();

// IIFE
(function () {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();


// Arrow funciton

let sum = (a, b) => { return a + b; };
console.log(sum(1, 2))