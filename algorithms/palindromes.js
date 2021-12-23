/** PALINDROMES
  A palindrome is a word that is spelled the same forward and backwards.

  Write a function that returns whether a string contains a palindrome.

  RECAP OF REGEX:
    A regular expression is a sequence of characters that form a search pattern. May be a single character or a more somplicated pattern. Used often with text search and replace operations.

    /pattern/modifier
    /milk/i-regular expression

    /\W/ <-- This will catch all non-word characters
    Capital W is equivalent to [^A-Za-z0-9]

    g - global modifier
    i - case insensitive

  STRING.replace()
    Returns a new string with some or all matches of a pattern replaced by a replacement by a replacement. The pattern can be a string or a regex. The replacement can be a string or function to be called for each match.

    var milkAdd = 'Drink more milk'
    var milkAlt = milkAdd.replace('milk', 'silk')
    milkAlt // --> 'Drink more silk';

    var milkAdd = 'Drink more milk'
    var milkSub = milkAdd.replace(/milk/, 'soy milk')
    console.log(milkSub) --> 'Drink more soy milk'
 */

let racecar = 'racecar';
let racecarWDash = 'Race-car';
let nothing = 'nothing'
let dad = 'dad';

const findPalindrome = function (string) {
  string = string.replace(/\W/g, '').toLowerCase()
  for (let i = 0; i < string.length; i++) {
    let head = string[i];
    let tail = string[string.length - 1 - i]
    if (head !== tail) {
      return false
    }
  }
  return true;
}

console.log(findPalindrome('aaaaaa'))


const palindrome = function(str) {
  str = str.replace(/\W/g, '').toLowerCase()
  let splitted = str.split('')
  let reversed = str.split('').reverse()
  for (var i = 0; i < splitted.length; i++) {
    if (splitted[i] !== reversed[i]) {
      return false;
    }
  }
  return true;
}

// console.log(palindrome())