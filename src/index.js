import readlineSync from 'readline-sync';

export const playBrainGames = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('Welcome to the Brain Games!');
};

export const getRandomNum = () => Math.floor(Math.random() * 1000);

export const questionLimit = 3;
