/** ALGORITHM
  In a comouter an algorithm is a lot like a recipe and tells your computer precisely what steps to take to solve a problem or reach a goal.
 */

  let words = 'My last mentor would puntificate the majority of his words to sound more smarter than he really was.';

  let findLongestWords = function(string) {
    let wordsArr = string.split(' ')
    let longestWordLength = 0;
    for (let i = 0; i < wordsArr.length; i++) {
      if (wordsArr[i].length > longestWordLength) {
        longestWordLength = wordsArr[i].length;
      }
    }
    let result = {};
    for (let word of wordsArr) {
      if (word.length === longestWordLength) {
        result[word] = word;
      }
    }
    let keys = Object.keys(result)
    if (keys.length === 1) {
      return keys[0];
    } else {
      return keys;
    }
    return longestWordLength;
  }

  console.log(findLongestWords(words))
