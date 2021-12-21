/** ALGORITHM
  An algorithm is a self-contained step-by-step set of operations to be transformed. Algorithms perform calculation, data processing, and/or automated reasoning tasks.
 */

// Implement an algorithm to determine if a string has all unique characters.

var strings = ['No this camera', 'No this string is not unique', 'boring', 'yes']

// I: given an array of strings
// O: return an array of boolean values determining if each of the characters have unique characters
var uniq = function(array) {
  let result = array.map((curr) => {
    let joined = curr.split(' ').join('').toLowerCase();
    let storage = {};
    for (let i = 0; i < joined.length; i++) {
      if (joined[i] in storage) {
        storage[joined[i]]++;
        return false;
      }
      storage[joined[i]] = 1;
    }
    return true;
  })
  return result;
}
// console.log(uniq(strings))


// VIDEO SOLUTION
function unique(string) {
  // iterate over our string
  for (var i = 0; i < string.length; i++) {
    // if the first index and the last index match
    if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
      return false;
    }
      return true;
  }

  // return true
}
console.log(unique('paper'))
console.log(unique('yes'))
