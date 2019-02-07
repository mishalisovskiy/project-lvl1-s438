import readlineSync from 'readline-sync';

const buildGame = (gameTask, getMathProblem, getCorrectAnswer, mathProblemToSting) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(gameTask);
  const roundsLimit = readlineSync.question('How many rounds would you like to play? ');

  const roundsPlayed = (counter) => {
    if (counter === Number(roundsLimit)) {
      return console.log('Congratulations! You won.');
    }
    const mathProblem = getMathProblem();
    console.log(mathProblemToSting(mathProblem));
    const correctAnswer = String(getCorrectAnswer(mathProblem));
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return roundsPlayed(counter + 1);
    }

    return console.log(`'${userAnswer}' is the wrong answer ;(. The correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
  };
  return roundsPlayed(0);
};

export default buildGame;
