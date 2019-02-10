import buildGame from '..';
import getNumber from '../utils';
import * as _ from 'lodash';

const gameTask = 'What is the result of an expression?';
const getOperator = () => _.sample(['+', '-', '*']);

const brainCalc = () => {
  const operand1 = getNumber(0, 20);
  const operator = getOperator();
  const operand2 = getNumber(0, 20);
  const mathProblem = `${operand1} ${operator} ${operand2}`;

  const calculateTheExression = (str) => {
    switch (str) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      default:
        return null;
    }
  };

  const correctAnswer = calculateTheExression(operator);
  return { question: mathProblem, answer: correctAnswer };
};

export default () => buildGame(brainCalc, gameTask);
