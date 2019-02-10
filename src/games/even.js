import buildGame from '..';
import getNumber from '../utils';

const gameTask = "Answer 'yes' if a number is even, otherwise answer 'no'.";
const isEven = value => value % 2 === 0;

const brainEven = () => {
  const numToEvaluate = getNumber(0, 100);
  const mathProblem = `${numToEvaluate}`;
  const correctAnswer = value => (isEven(value) ? 'yes' : 'no');
  return { question: mathProblem, answer: correctAnswer(mathProblem) };
};

export default () => buildGame(brainEven, gameTask);
