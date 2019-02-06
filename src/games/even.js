import { getRandomNum, questionLimit, greeting, userName } from '..';
import readlineSync from 'readline-sync';

const playBrainEven = () => {
  greeting();
  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'');
  const iter = (counter) => {
    if (counter === questionLimit) {
      console.log(`Congratulations, ${userName}!`);
      return null;
    }

    const randomNum = getRandomNum(1000);
    console.log(`Question: ${randomNum}`);
    const userInput = readlineSync.question('Your answer: ');
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    if (userInput === correctAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    console.log(`'${userInput}' is the wrong answer ;(. The correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    return null;
  };
  return iter(0);
};

export default playBrainEven;
