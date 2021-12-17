// create a usersChoice function
function getUserChoice(promptUserChoice) {
  let userChoice = promptUserChoice.toLowerCase();
  let validChoices = ['bear', 'human', 'gun'];
  for (let choice of validChoices) {
    if (userChoice === choice) {
      return choice
    }
  }
  return `You didn't chose a valid option!`;
}

// create a compChoice function
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3)
  if (randomNum === 0) {
    return 'bear';
  }
  if (randomNum === 1) {
    return 'human';
  }
  if (randomNum === 2) {
    return 'gun';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return `Tie!`
  }
  let outcomes = ['Bear mauls human!', 'Human disarms gun!', 'Gun shoots bear!'];
  if (userChoice === 'human') {
    if (computerChoice === 'gun') {
      return `${outcomes[1]} Human wins!`
    } else if (computerChoice === 'bear') {
      return `${outcomes[0]} Computer wins!`
    }
  }
  if (userChoice === 'bear') {
    if (computerChoice === 'human') {
      return `${outcomes[0]} Human wins!`
    } else if (computerChoice === 'gun') {
      return `${outcomes[2]} Computer wins!`
    }
  }
  if (userChoice === 'gun') {
    if (computerChoice === 'bear') {
      return `${outcomes[2]} Human wins!`
    } else if (computerChoice === 'human') {
      return `${outcomes[1]} Computer wins!`
    }
  }
  return `You chose You didn't chose a valid option!`
}
function playGame() {
  let promptUserChoice = prompt("Please choose bear, human or gun");
  let usersChoice = getUserChoice(promptUserChoice);
  let computerChoice = getComputerChoice();
  console.log(`You chose`, usersChoice);
  console.log(`The computer chose`, computerChoice);
  console.log(determineWinner(usersChoice, computerChoice));
}

playGame();