import buildGame from '..';
import getNumber from '../utils';
import * as math from 'mathjs';

const gameTask = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => {
  const dividend1 = getNumber(0, 40);
  const dividend2 = getNumber(0, 40);
  const question = `${dividend1} ${dividend2}`;
  const answer = String(math.gcd(dividend1, dividend2));
  return { question, answer };
};

export default () => buildGame(brainGCD, gameTask);
