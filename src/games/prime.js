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

const getQuestion = () => getNumber(0, 50);

const brainPrime = () => {
  const question = `${getQuestion()}`;
  const answer = (isPrime(Number(question)) ? 'yes' : 'no');
  return { question, answer };
};

export default () => buildGame(brainPrime, gameTask);
