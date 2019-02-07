import buildGame from '..';

const gameTask = 'Answer \'yes\' if a number is even, otherwise answer \'no\'.';
const getNumber = () => Math.floor(Math.random() * (1000));
const getMathProblem = () => getNumber();
const isEven = value => value % 2 === 0;
const getCorrectAnswer = value => (isEven(value) ? 'yes' : 'no');
const mathProblemToSting = value => String(value);
const playBrainEven = () => buildGame(gameTask, getMathProblem,
  getCorrectAnswer, mathProblemToSting);

export default playBrainEven;
