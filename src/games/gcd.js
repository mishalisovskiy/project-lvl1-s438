import buildGame from '..';
import getNumber from '../utils/getNumber';
import * as math from 'mathjs';

const brainGCD = () => {
  const mathProblem = ([getNumber(0, 40), getNumber(0, 40)]);
  const correctAnswer = math.gcd(mathProblem[0], mathProblem[1]);
  const mathProblemToSting = `${mathProblem[0]} ${mathProblem[1]}`;
  const playableObj = Object({
    task: 'Find the greatest common divisor of given numbers.',
    problem: mathProblem,
    answer: correctAnswer,
    toString: mathProblemToSting,
  });
  return playableObj;
};

const playBrainGCD = () => buildGame(brainGCD);

export default playBrainGCD;
