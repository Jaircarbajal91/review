/** SPREAD OPERATOR
  The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) or multiple variables (for destructuring assignment) are expected.
 */

// ARRAYS
let letters = ['a', 'b', 'c']
// console.log(...letters)

let bet = ['d', 'e', 'f']
// console.log([...letters, ...bet])

// FUNCTIONS
let first = [1, 2, 3]
let second = [2, 4, 6]
let productOfThree = (a, b, c) => {
  return a * b * c;
}
// console.log(productOfThree(...first))

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
console.log([...arr1, ...arr2])

let func = (a, b, c) => {
  return `${a} ${b} ${c}`
}
let arr = ['I', 'am', 'beautiful'];
console.log(func(...arr))