import buildGame from '..';
import getNumber from '../utils/getNumber';


const brainEven = () => {
  const isEven = value => value % 2 === 0;
  const mathProblem = getNumber(0, 100);
  const correctAnswer = value => (isEven(value) ? 'yes' : 'no');
  const mathProblemToSting = value => String(value);
  const playableObj = Object({
    task: "Answer 'yes' if a number is even, otherwise answer 'no'.",
    problem: mathProblem,
    answer: correctAnswer(mathProblem),
    toString: mathProblemToSting(mathProblem),
  });
  return playableObj;
};

const playBrainEven = () => buildGame(brainEven);

export default playBrainEven;
