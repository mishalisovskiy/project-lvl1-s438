import buildGame from '..';
import getNumber from '../utils';
import * as _ from 'lodash';

const gameTask = 'What is the result of an expression?';

const brainCalc = () => {
  const getOperator = () => _.sample(['+', '-', '*']);
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
  const playableObj = Object({
    question: mathProblem,
    answer: correctAnswer,
  });
  return playableObj;
};

export default () => buildGame(brainCalc, gameTask);
