import buildGame from '..';
import { buildYesOrNoFunc } from '../utils';

const gameTask = "Answer 'yes' if a number is even, otherwise answer 'no'.";
const isEven = question => question % 2 === 0;
const brainEven = () => buildYesOrNoFunc(isEven, 0, 1000);

export default () => buildGame(brainEven, gameTask);
