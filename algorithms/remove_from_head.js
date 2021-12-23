/**
  Given an array of elements and an amount to remove; remove the amount elements from the beginning (head) of the array.

  Use the splice method that will deconstruct/mutate the original array.
 */

let cars = ['Ferrari', 'Honda', 'Toyota', 'Ford', 'Cheverolet'];
let fastFood = ['In-N-Out', 'Wendy\'s', 'Chik-Fil-A', 'McDonalds', 'Jack In The Box'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let removeFromHead = function (array, num) {
  if (num > array.length) {
    num = array.length;
  }
  array.splice(0, num)
  return array;
}

removeFromHead(cars, 2)
console.log(cars)
removeFromHead(fastFood, 3)
console.log(fastFood)
removeFromHead(months, 2)
console.log(months)