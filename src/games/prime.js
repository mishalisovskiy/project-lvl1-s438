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

const brainProgression = () => {
  const numToEvaluate = getNumber(0, 50);
  const correctAnswer = value => (isPrime(value) ? 'yes' : 'no');
  const mathProblem = `${numToEvaluate}`;
  return { question: mathProblem, answer: correctAnswer(numToEvaluate) };
};

export default () => buildGame(brainProgression, gameTask);
