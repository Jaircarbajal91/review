/** REDUCE() - LIST TRANSFORMATION
  Applies a function against an accumulator and eachvalue of the array (from left to right) to reduce it to a single value.

  ** SYNTAX
  array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)
 */

var numbers = [1, 2, 3, 4]
var reduced = numbers.reduce((acc, curr, idx, arr) => {
  return acc + curr;
}, 5)
// console.log(reduced);

var multArr = [[0, 1], [2, 3], [4, 5]];
var concatted = multArr.reduce((acc, curr) => {
  return acc.concat(curr)
})

// console.log(concatted)

var homeruns = [
  { batter: 12},
  { batter: 21},
  { batter: 28},
  { batter: 42},
  { batter: 31},
  { batter: 22},
  { batter: 17},
  { batter: 16},
  { batter: 5},
]

var totalHomers = homeruns.reduce((a, b) => {
  return a + b.batter;
}, 0)

// console.log(totalHomers)
var newNums = [12, 7, 454, 111, 92, 1, 500];
var sum = newNums.reduce((a, b) => {
  return a + b;
})
// console.log(sum)
var product = newNums.reduce((a, b) => {
  return a * b;
})
// console.log(product)

var largest = newNums.reduce((acc, curr) => {
  if (curr >=   acc) {
    acc = curr;
  }
  return acc;
})

// console.log(largest)

var numbers = [1, 2, 3, 4];
var triplesSum = numbers.map(num => {
  return num * 3;
}).reduce((a, b) => {
  return a + b;
})

console.log(triplesSum)