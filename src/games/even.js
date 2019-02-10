import buildGame from '..';
import getNumber from '../utils';

const gameTask = "Answer 'yes' if a number is even, otherwise answer 'no'.";
const isEven = value => value % 2 === 0;

const brainEven = () => {
  const numToEvaluate = getNumber(0, 100);
  const question = `${numToEvaluate}`;
  const answer = (isEven(question) ? 'yes' : 'no');
  return { question, answer };
};

export default () => buildGame(brainEven, gameTask);
