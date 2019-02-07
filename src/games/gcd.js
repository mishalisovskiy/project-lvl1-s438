import buildGame from '..';
import * as math from 'mathjs';

class Pair {
  constructor(car, cdr) {
    this.car = car;
    this.cdr = cdr;
  }

  getFirst() {
    return this.car;
  }

  getLast() {
    return this.cdr;
  }
}

const gameTask = 'Find the greatest common divisor of given numbers.';
const getDividend = () => Math.floor(Math.random() * 50);
const getCorrectAnswer = value => math.gcd(value.getFirst(), value.getLast());
const getTwoNumbers = () => new Pair(getDividend(), getDividend());
const getMathProblem = () => getTwoNumbers();
const mathProblemToSting = value => `${value.getFirst()} ${value.getLast()}`;
const playBrainGCD = () => buildGame(gameTask, getMathProblem,
  getCorrectAnswer, mathProblemToSting);

export default playBrainGCD;
