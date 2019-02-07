import buildGame from '..';
import * as math from 'mathjs';

const gameTask = 'What is the result of an expression?';

const getOperator = () => {
  const randomForOperator = () => Math.floor(Math.random() * 3);
  if (randomForOperator() === 1) {
    return '+';
  }
  if (randomForOperator() === 2) {
    return '-';
  }
  return '*';
};

const getOperand = () => Math.floor(Math.random() * 20);
const getMathProblem = () => `${getOperand()} ${getOperator()} ${getOperand()}`;
const getCorrectAnswer = value => math.eval(value);
const mathProblemToSting = value => value;

const playBrainEven = () => buildGame(gameTask, getMathProblem,
  getCorrectAnswer, mathProblemToSting);

export default playBrainEven;
