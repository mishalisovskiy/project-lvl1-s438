import buildGame from '..';
import getNumber from '../utils/getNumber';
import * as _ from 'lodash';

const brainCalc = () => {
  const getOperator = () => _.sample(['+', '-', '*']);
  const getOperand = () => getNumber(0, 20);
  const mathProblem = [getOperand(), getOperator(), getOperand()];

  const calculateTheExression = (str) => {
    switch (str) {
      case '+':
        return mathProblem[0] + mathProblem[2];
      case '-':
        return mathProblem[0] - mathProblem[2];
      case '*':
        return mathProblem[0] * mathProblem[2];
      default:
        return null;
    }
  };

  const correctAnswer = calculateTheExression(mathProblem[1]);
  const mathProblemToSting = ([operand1, operator, operand2]) => `${operand1} ${operator} ${operand2}`;
  const playableObj = Object({
    task: 'What is the result of an expression?',
    problem: mathProblem,
    answer: correctAnswer,
    toString: mathProblemToSting(mathProblem),
  });
  return playableObj;
};

const playBrainCalc = () => buildGame(brainCalc);

export default playBrainCalc;
