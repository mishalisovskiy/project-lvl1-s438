import readlineSync from 'readline-sync';

export const userName = readlineSync.question('May I have your name? ');

export const greeting = () => {
  console.log(`Hello ${userName}!`);
  console.log('Welcome to the Brain Games!');
};

export const getRandomNum = maxValue => Math.floor(Math.random() * maxValue);

export const questionLimit = 3;
