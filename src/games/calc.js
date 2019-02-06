import { getRandomNum, questionLimit, userName, greeting } from '..';
import readlineSync from 'readline-sync';
import * as math from 'mathjs';

const getRandomOperator = () => {
  const randomForOperator = () => Math.floor(Math.random() * 3);
  if (randomForOperator() === 1) {
    return '+';
  }
  if (randomForOperator() === 2) {
    return '-';
  }
  return '*';
};

const getMathProblem = () => `${getRandomNum()} ${getRandomOperator()} ${getRandomNum()}`;

const playBrainCalc = () => {
  greeting();
  console.log('What is the result of the expression?');
  const iter = (counter) => {
    if (counter === questionLimit) {
      console.log(`Congratulations, ${userName}!`);
      return null;
    }
    const mathProblem = getMathProblem();
    const correctCalculation = math.eval(mathProblem);
    console.log(`Question: ${mathProblem}`);
    const userInput = readlineSync.question('Your answer: ');

    if (Number(userInput) === correctCalculation) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    console.log(`'${userInput}' is the wrong answer ;(. The correct answer was '${correctCalculation}'.
Let's try again, ${userName}!`);
    return null;
  };
  return iter(0);
};

export default playBrainCalc;
