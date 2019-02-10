import buildGame from '..';
import getNumber from '../utils';
import * as _ from 'lodash';

const gameTask = 'What number is missing in the progression?';

const playProgression = () => {
  const numToAdd = getNumber(0, 20);
  const startingPoint = getNumber(0, 100);

  const progressiveArray = () => {
    const result = [];

    for (let i = startingPoint; result.length <= 10; i += numToAdd) {
      result.push(i);
    }
    return result;
  };

  const arrayToEvaluate = progressiveArray();
  const replacedItemInArray = _.sample(arrayToEvaluate);
  const arrayToString = arrayToEvaluate.reduce((acc, item) => (`${acc} ${item}`), '');
  const mathProblem = _.replace([arrayToString], replacedItemInArray, '..');
  const playableObj = Object({
    question: mathProblem,
    answer: replacedItemInArray,
  });
  return playableObj;
};

export default () => buildGame(playProgression, gameTask);
