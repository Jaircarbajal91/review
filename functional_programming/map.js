/** RECAP OF PURE FUNCTIONS
  A function is pure if, given the same input it will always produce the same output.

  An expample of an impure function is Math.random() because every time we invoke it, we get a different output.
 */

  /** MAP HIGHER ORDER FUNCTION
    Creates a new array with the results of calling a provided function on every element of an array.
   */

    var forecast = [
      {day: 'Monday', sun: true, humidity: 10 },
      {day: 'Tuesday', sun: false, humidity: 100 },
      {day: 'Wednesday', sun: false, humidity: 100 },
      {day: 'Thursday', sun: true, humidity: 25 },
      {day: 'Friday', sun: false, humidity: 100 },
      {day: 'Saturday', sun: true, humidity: 15 },
      {day: 'Sunday', sun: false, humidity: 100 },
    ];

    var humid = forecast.map((day) => {
      return day.humidity;
    });

    // console.log(humid)

    var numbers = [5, 10, 15, 20, 25];
    var triples = numbers.map((num) => {
      return num * 3;
    })

    // console.log(triples)

  var chainedNums = numbers.map(doubled => {
    return doubled * 2;
  }).map(num => {
    return num + 1;
  })
  // console.log(chainedNums)

  var greetings = ['hi', 'hello', 'hey', 'thanks']
  var shout = greetings.map(word => {
    return word.toUpperCase();
  })
  var hiShout = shout.shift();
  console.log(hiShout)