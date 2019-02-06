import readlineSync from 'readline-sync';

export const askUserName = () => {
  console.log(`Hello ${userName}!`);
};

export const userName = readlineSync.question('May I have your name? ');
