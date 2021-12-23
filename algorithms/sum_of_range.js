/**
  Given an array with two values, find the sum of those numbers within the range.


  EXAMPLES:
  [1, 4]  --> 1 + 2 + 3 + 4
  [5, 2]  --> 5 + 4 + 3 + 2
 */


  let sumRange = function(array) {
    let max = Math.max(...array)
    let min = Math.min(...array)
    let result = 0;
    for(let i = min; i <= max; i++) {
      result += i;
    }
    return result;
  }

  let array1 = [5, 2]
  let array2 = [1, 4]
  console.log(sumRange(array1))
  console.log(sumRange(array2))