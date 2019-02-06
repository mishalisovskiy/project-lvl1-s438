import { getRandomNum, questionLimit, userName, greeting } from '..';
import readlineSync from 'readline-sync';
import * as math from 'mathjs';

const getDividend = () => getRandomNum(30);

const playBrainGCD = () => {
  greeting();
  console.log('Find the greatest common divisor of given numbers.');
  const iter = (counter) => {
    if (counter === questionLimit) {
      console.log(`Congratulations, ${userName}`);
      return null;
    }
    const dividendOne = getDividend();
    const dividendTwo = getDividend();
    const correctGCD = math.gcd(dividendOne, dividendTwo);
    const getTwoNumbers = () => `${dividendOne} ${dividendTwo}`;
    const problemToSolve = getTwoNumbers();
    console.log(`Question: ${problemToSolve}`);
    const userInput = readlineSync.question('Your answer: ');
    if (Number(userInput) === correctGCD) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    console.log(`'${userInput}' is the wrong answer ;(. The correct answer was '${correctGCD}'.
Let's try again, ${userName}!`);
    return null;
  };
  return iter(0);
};

export default playBrainGCD;
