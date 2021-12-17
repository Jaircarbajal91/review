function inputCaloriesByDay(day) {
  day = day.toLowerCase();
  switch (day) {
    case 'monday': return 2000;
    break;
    case 'tuesday': return 2000;
    break;
    case 'wednesday': return 2000;
    break;
    case 'thursday': return 2000;
    break;
    case 'friday': return 2000;
    break;
    case 'saturday': return 2000;
    break;
    case 'sunday': return 2000;
    break;
  }
}


function getTotalCalories() {
  let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',]
  let sum = 0;
  for (var day of week) {
    let input = inputCaloriesByDay(day)
    sum += input;
  }
  return sum;
}

function getIdealCalories() {
  let idealDailyCalories = 1950;
  return idealDailyCalories * 7;
}

function calculateHealthPlan() {
  let actualCalories = getTotalCalories();
  let idealCalories = getIdealCalories();
  if (actualCalories === idealCalories) {
    return "You ate just the right amount of food!";
  }
  if (actualCalories > idealCalories) {
    return "Time to head to the gym!";
  } else {
    return "Time for seconds!";
  }
}
console.log((calculateHealthPlan()))