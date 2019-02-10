import buildGame from '..';
import getNumber from '../utils';
import * as _ from 'lodash';

const gameTask = 'What number is missing in the progression?';
const targetLengthOfArray = 10;

const playProgression = () => {
  const numToAdd = getNumber(0, 20);
  const startingPoint = getNumber(0, 100);

  const progressiveArray = () => {
    const createAnArray = (counter, processedArray) => {
      if (counter === targetLengthOfArray) {
        return processedArray;
      }
      return createAnArray(counter + 1,
        processedArray.concat(startingPoint + (numToAdd * counter)));
    };
    return createAnArray(1, [startingPoint]);
  };

  const arrayToEvaluate = progressiveArray();
  const arrayToString = arrayToEvaluate.join(' ');
  const replacedItemInArray = _.sample(arrayToEvaluate);
  const mathProblem = _.replace([arrayToString], replacedItemInArray, '..');

  return { question: mathProblem, answer: replacedItemInArray };
};

export default () => buildGame(playProgression, gameTask);
