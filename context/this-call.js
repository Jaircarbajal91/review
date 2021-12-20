/** CALL METHOD
   The call() method calls a funciton with a given "this" value and argument provided individually.
 */

// SYNTAX
// fun.call(object, arg1, arg2, ...)
var obj = {
  num: 2
};
var addToThis = function (a, b, c) {
  return this.num + a + b + c;
}

// console.log((addToThis.call(obj, 1, 2, 3)));

var person1 = { firstName: 'John', lastName: 'Doe' };
var person2 = { firstName: 'Jane', lastName: 'Doe' };

function hello(greeting) {
  console.log(`${greeting} ${this.firstName} ${this.lastName}`);
}
// 'this' in context our person objects. It should be passed in as the first argument
// console.log(hello.call(person1, 'Hello!'))
// console.log(hello.call(person2, 'Hello!'))

var myLanguages = function(lang1, lang2, lang3) {
  console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`);
}

var people1 = { name: 'Jair' };
var people2 = { name: 'Tina' };

console.log(myLanguages.call(people1, 'English', 'Spanish', 'Cat'))
console.log(myLanguages.call(people2, 'English', 'Spanish', 'Cat'))