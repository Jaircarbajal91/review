'use strict'

// what is scope?
// In JS you have two scopes. Global and local. Variables declared outside of a function are in the global scope. Variables that are declared inside of a function body are local to that specific function.

// The Scope Chain
// The JS interpreter will first look for a variable in the local (child) scope. If not found, then the interpreter will look for the variable in the global scope. Th global scope cannot look inward, but the inward scope can look outward.

var scope = 'public';
function checkScope() {
  scope = 'private';
  return scope;
}
// console.log(scope)
// console.log(checkScope());
// console.log(scope);
// Here we see that the variable in the global scope has been changed because we never used the keyword var.
// One way to keep this from happening is by using the 'use scrict'. Why the strict mode? Strict mode makes it easier to write secure javascript by throwing erros when using 'bad javascript'.
// dog = 'Oscar'; // this will throw an error in strict mode
// x = '3.14'; // this will throw an error in strict mode

let gallons = 12;
let mpg = 34;
function roadTrip() {
  return gallons * mpg;
}

// console.log(roadTrip())
var globalScope = 1;
function outFunc() {
  var outerVar = 2;
  function innerFunc() {
    var innerVar = 3;
    return globalScope + outerVar + innerVar;
  }
  return innerFunc();
}
console.log(outFunc())