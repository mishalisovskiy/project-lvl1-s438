import buildGame from '..';
import { getNumber, yesOrNo } from '../utils';

const gameTask = "Answer 'yes' if a number is even, otherwise answer 'no'.";
const getQuestion = () => getNumber(0, 100);
const isEven = question => question % 2 === 0;

const brainEven = () => {
  const question = `${getQuestion()}`;
  const answer = yesOrNo(isEven, question);
  return { question, answer };
};

export default () => buildGame(brainEven, gameTask);
