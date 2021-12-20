/** FUNCTIONAL PROGRAMMING
  JS can handle higer-order functions. A higher-order function is a function that can take another function as an argument, or that returns a function as a result.

  In JS, functions are objects. This means that functions are also values that can be passed and used to other functions.

  Functional programming glossaries contain a large number of large words, but at its core, the essense of Functional Programming is really very simple; programs are built mostly with a handful of very small, very reusable, very predictable pure functions. - Eric Elliot.

  ** 2 QUESTIONS
    Who is Eric Elliot?
     - Eric Elliott is an American author, writer, and software developer. He is the author of “Composing Software” and co-founder of DevAnywhere.io.

    What is a pure function?
     - A pure function is a function is a function in which:
      - Given the same input, will always return the same output.
      - produce no side effects.
      - relies on no external state.
 */

var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];
var goOutside = weather.filter((temp) => {
  if (temp > 70) {
    return temp;
  }
});
// console.log(goOutside)

var forecast = [
  { day: 'Monday', sun: true },
  { day: 'Tuesday', sun: false },
  { day: 'Wednesday', sun: false },
  { day: 'Thursday', sun: true },
  { day: 'Friday', sun: false },
  { day: 'Saturday', sun: true },
  { day: 'Sunday', sun: false }
];

var sunnyDays = forecast.filter((day) => {
  return day.sun
})

console.log(sunnyDays)