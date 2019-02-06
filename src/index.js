import readlineSync from 'readline-sync';

export const userName = readlineSync.question('May I have your name? ');
export const askUserName = () => {
  console.log(`Hello ${userName}!`);
};
