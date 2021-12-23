/** QUESTION
  Determine if two strings are a permutation of each other.

  Permutation: "A way, especially one of several possible variations, in which a set or number of things can be ordered or arranged."
 */


let words = 'india ndiia'
let permutations = function (str) {
  str = str.toLowerCase();
  let splitWords = words.split(' ')
  if (splitWords[0].length !== splitWords[1].length) {
    return false;
  }
  let word1 = splitWords[0].split('')
  let word2 = splitWords[1].split('')
  let storage1 = {};
  let storage2 = {};
  // we want to put all the letters in the object and count the letters
  word1.forEach(letter => {
    if (letter in storage1) {
      storage1[letter]++
    } else {
      storage1[letter] = 1
    }
  })
  word2.forEach(letter => {
    if (letter in storage2) {
      storage2[letter]++
    } else {
      storage2[letter] = 1
    }
  })
  let keys1 = Object.keys(storage1);
  let keys2 = Object.keys(storage2);
  keys1 = keys1.sort()
  keys2 = keys2.sort()

  for (var i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) {
      return false;
    }
    return true;
  }
}


function isPermutation(str1, str2) {
  return str1.split('').sort().join('') == str2.split('').sort().join('');
}

console.log(isPermutation('india', 'ndiia'))