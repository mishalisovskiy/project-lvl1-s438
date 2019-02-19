import readlineSync from 'readline-sync';

const buildGame = (game, task) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(task);
  const roundsLimit = readlineSync.question('How many rounds would you like to play? ');

  const iterateGame = (counter) => {
    if (counter === Number(roundsLimit)) {
      return console.log('Congratulations! You won.');
    }
    const { question, answer } = game();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
      iterateGame(counter + 1);
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. The correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`)    
    }
  };
  iterateGame(0);
};

export default buildGame;
