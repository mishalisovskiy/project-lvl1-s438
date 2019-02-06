#!/usr/bin/env node
import playBrainEven from '../games/even';
import playBrainCalc from '../games/calc';
import readlineSync from 'readline-sync';
import { userName } from '..';

const chooseTheGame = () => {
  console.log(`Please choose the game, ${userName}`);
  const gameChosen = readlineSync.question('1: Brain-Even, 2: Brain-Calc ');
  switch (gameChosen) {
    case '1':
      playBrainEven();
      break;
    case '2':
      playBrainCalc();
      break;
    default:
      console.log('Invalid key. Please try again.');
  }
};

chooseTheGame();
