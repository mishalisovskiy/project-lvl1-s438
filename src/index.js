import readlineSync from 'readline-sync';

const roundsLimit = 3;

const buildGame = (game, task) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(task);

  const roundsPlayed = (counter) => {
    if (counter === roundsLimit) {
      return console.log('Congratulations! You won.');
    }
    const currentData = game();
    console.log(currentData.question);
    const correctAnswer = String(currentData.answer);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(currentData.answer)) {
      console.log('Correct!');
      return roundsPlayed(counter + 1);
    }

    console.log(`'${userAnswer}' is the wrong answer ;(. The correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  };
  return roundsPlayed(0);
};

export default buildGame;
