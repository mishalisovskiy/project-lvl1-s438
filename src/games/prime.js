import buildGame from '..';
import getNumber from '../utils';

const gameTask = "Answer 'yes' if a given number is prime. Otherwise answer 'no'.";

const isPrime = (value) => {
  let prime = true;

  for (let i = 2; i <= Math.sqrt(value); i += 1) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  return prime && (value > 1);
};

const brainPrime = () => {
  const numToEvaluate = getNumber(0, 50);
  const question = `${numToEvaluate}`;
  const answer = (isPrime(question) ? 'yes' : 'no');
  return { question, answer };
};

export default () => buildGame(brainPrime, gameTask);
