/** LET STATEMENT
  The let statement allows for block scope to declare a local variable. This differs from the var keyword, which declares a variable globally or local to the scope of the function.
 */

var greeting = 'hello';
// console.log(greeting);

greeting = 'Nice to meet you';
// console.log(greeting);

var greeting = 'Hi';
// console.log(greeting);

// Lets look at how 'let' differs from 'var' when doing the same thing
let name = 'Joe';
// console.log(name);

name = 'Sarah';
// console.log(name)

// This is called the temporal dead zone. Redeclaring the same variable with within the same function or scope will raise an error.
// let name = 'James';
// console.log(name);

var word = 'word';
if (word) {
  var otherWord = 'word1'
}
// console.log(word + ' ' + otherWord)

let word2 = 'word';
if (word) {
  let otherWord2 = 'word1'
}
// console.log(word2 + ' ' + otherWord2) // throws an error