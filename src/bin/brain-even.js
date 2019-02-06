#!/usr/bin/env node

import { askUserName, userName } from '..';
import readlineSync from 'readline-sync';

const init = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number is even, otherwise answer "no".');
};
askUserName();

init();

let cyclesRun = 1;

const brainEven = () => {
  const randomNum = Math.floor(Math.random() * 1000);
  console.log(`Question: ${randomNum}`);
  const userInput = readlineSync.question('Your answer: ');
  if (cyclesRun === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else if (randomNum % 2 === 0 && userInput !== 'yes') {
    console.log(`'${userInput}' is the wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${userName}"`);
  } else if (randomNum % 2 !== 0 && userInput !== 'no') {
    console.log(`'${userInput}' is the wrong answer ;(. Correct answer was 'no'.
Let's try again, ${userName}"`);
  } else if (randomNum % 2 !== 0 && userInput === 'no') {
    cyclesRun += 1;
    console.log('Correct!');
    brainEven();
  } else if (randomNum % 2 === 0 && userInput === 'yes') {
    cyclesRun += 1;
    console.log('Correct!');
    brainEven();
  }
};

brainEven();
