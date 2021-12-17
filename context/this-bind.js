/** THIS & BIND
  In most cases, the value of "this" is determined by how a function is called. It can't be set by assignment during execution and it may be different each time the function is called. ES5 introduced the bind method to set the value of a function's "this" regardless of how it's called. Bind creates a new function that will have "this" set to the first parameter passed to bind().
 */

  // create an object literal
  let cat = {};
  cat = {
    sound: 'meow',
    speak: function() {
      console.log(this.sound);
    }
  };
  // cat.speak();

  let speakFunciton = cat.speak;
  let speakFuncitonBind = speakFunciton.bind(cat);
  // speakFuncitonBind()

  let person1 = {
    name: 'Alex'
  };

  let person2 = {
    name: 'Alexis'
  };

  function namer() {
    return this.name;
  }
  // we want the function to be in the person objects context
  person1.namer = namer.bind(person1);
  console.log(person1.namer())
  person2.namer = namer.bind(person2);
  console.log(person2.namer())
  // this solution is adding a new property in our persons objects. Sometimes you might not want to modify your objects, so its important to know that you can implement like this too: namer.bind(person1)(). Writing it this way only utilizes the function and doesn't add a new property.

  let numbers = {
    x: 24,
    y: 22
  }

  let count = function() {
    console.log(this.x + this.y);
  }
  count.bind(numbers)()