#!/usr/bin/env node
import playBrainEven from '../games/even';
import playBrainCalc from '../games/calc';
import playBrainGCD from '../games/gcd';
import readlineSync from 'readline-sync';
import { userName } from '..';

const chooseTheGame = () => {
  console.log(`Please choose the game, ${userName}`);
  const gameChosen = readlineSync.question('1: Brain-Even; 2: Brain-Calc; 3: Brain-GCD ');
  switch (gameChosen) {
    case '1':
      playBrainEven();
      break;
    case '2':
      playBrainCalc();
      break;
    case '3':
      playBrainGCD();
      break;
    default:
      console.log('Invalid key. Please try again.');
  }
};

chooseTheGame();
