import readlineSync from 'readline-sync';

const roundsLimit = 3;

const getWinMessage = () => {
  console.log('Congratulations! You won.');
};

const buildGame = (game, task) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(task);

  const iterateGame = (counter) => {
    if (counter === roundsLimit) {
      return getWinMessage();
    } {
      const { question, answer } = game();
      console.log(question);
      const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer === answer) {
        console.log('Correct!');
        return iterateGame(counter + 1);
      }
      const getFailMessage = () => {
        console.log(`'${userAnswer}' is the wrong answer ;(. The correct answer was '${answer}'. \nLet's try again, ${userName}!`);
      };
      return getFailMessage();
    }
  };
  iterateGame(0);
};

export default buildGame;
