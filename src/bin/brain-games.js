#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playBrainEven from '../games/even';
import playBrainCalc from '../games/calc';
import playBrainGCD from '../games/gcd';
import playBrainProgression from '../games/progression';
import playBrainPrime from '../games/prime';

const chooseTheGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Please choose the game.');
  const gameChosen = readlineSync.question('1: Brain-Even; 2: Brain-Calc; 3: Brain-GCD, 4: Brain-Progression, 5: Brain-Prime ');
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
    case '4':
      playBrainProgression();
      break;
    case '5':
      playBrainPrime();
      break;
    default:
      console.log('Invalid key. Please try again.');
  }
};

chooseTheGame();
