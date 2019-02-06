import readlineSync from 'readline-sync';

export const userName = readlineSync.question('May I have your name? ');

export const greeting = () => {
  console.log(`Hello ${userName}!`);
  console.log('Welcome to the Brain Games!');
};

export const getRandomNum = () => Math.floor(Math.random() * 1000);

export const questionLimit = 3;
