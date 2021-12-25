const nameSwap = (name) => {
  return name.split(' ').reverse().join(' ')
}
// console.log(nameSwap('Abraham Lincoln'))
// console.log(nameSwap('Hank Aaron'))

const nameSwap2 = (name) => {
  let splitted = name.split(' ');
  return `${splitted[1]} ${splitted[0]}`;
}

// console.log(nameSwap('Hank Aaron'))
// console.log(nameSwap('Lincoln Abraham'))

const evensOnly = (arr) => {
  let result = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      result.push(num)
    }
  }
  return result;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(evensOnly(nums))

let evens = nums.filter(num => {
  return (num % 2 === 0)
});
// console.log(evens)

const repeatString = (str, num) => {
  if (num <= 0) {
    return '';
  }
  return `${str.repeat(num)}`
}

const repeatStringForLoop = (str, num) => {
  let result = '';
  if (num <= 0) {
    return ''
  }
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

const repeatStringWhile = (str, num) => {
  let result = '';
  if (num < 0) {
    return ''
  }
  while (num > 0) {
    result += str;
    num--;
  }
  return result;
}
// console.log(repeatStringWhile('car', 4))
// console.log(repeatStringWhile('bar', 3))

const findLongestString = (str) => {
  str = str.replace(/\W/g, ' ') ;
  let splitted = str.split(' ')
  let longest = splitted[0]
  for (let word of splitted) {
    if (word.length > longest.length) {
      longest = word
    }
  }
  return longest;
}
// let string1 = `Hi where is the airport?`
// let string2 = `Thanks for stopping by!`
// console.log((findLongestString(string2)))

const alphaOrder = (str) => {
  str = str.toLowerCase();
  return str.split('').sort().join('');
}

const alphaOrder1 = (str) => {
  return [...str].sort().join('')

}

// console.log(alphaOrder1('hello'))
// console.log(alphaOrder1('goodbye'))

const palindrome = (str) => {
  str = str.replace(/\W/g, '').toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    let head = str[i];
    let tail = str[str.length - 1 - i];
    if (head !== tail) {
      return false;
    }
  }
  return true;
}

let pal1 = 'Eva, Can I Stab Bats In A Cave?';
let pal2 = 'Was It A Rat I Saw?'
let pal3 = 'A nut for a jar of tuna?'
// console.log(palindrome(pal1))
// console.log(palindrome(pal2))
// console.log(palindrome(pal3))

