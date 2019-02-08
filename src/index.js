import readlineSync from 'readline-sync';

const buildGame = (game) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(game().task);
  const roundsLimit = readlineSync.question('How many rounds would you like to play? ');

  const roundsPlayed = (counter) => {
    if (counter === Number(roundsLimit)) {
      return console.log('Congratulations! You won.');
    }
    const currentData = game();
    console.log(currentData.toString);
    const correctAnswer = String(currentData.answer);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(currentData.answer)) {
      console.log('Correct!');
      return roundsPlayed(counter + 1);
    }

    return console.log(`'${userAnswer}' is the wrong answer ;(. The correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
  };
  return roundsPlayed(0);
};

export default buildGame;
