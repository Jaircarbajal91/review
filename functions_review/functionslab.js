let knockKnock = function() {
  return `Who's there?`
}
// console.log(knockKnock());

function dogWalker(person, dog) {
  return `${person} is walking ${dog} for a walk`
}

// console.log(dogWalker('Paul', 'Charlie'))

let iife = (function(person, dog) {
  return `${person} is walking ${dog} for a walk`
})('Paul', 'Charlie')

console.log(iife)