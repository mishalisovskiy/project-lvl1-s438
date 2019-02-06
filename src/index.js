import readlineSync from 'readline-sync';

export const playBrainGames = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('Welcome to the Brain Games!');
};

const getRandomNum = () => Math.floor(Math.random() * 1000);

const questionLimitBrainEven = 3;

export const playBrainEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('Welcome to the Brain Games!');
  const iter = (counter) => {
    if (counter === questionLimitBrainEven) {
      console.log(`Congratulations, ${userName}!`);
      return null;
    }

    const randomNum = getRandomNum();
    console.log(`Question: ${randomNum}`);
    const userInput = readlineSync.question('Your answer: ');
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    if (userInput === correctAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    console.log(`'${userInput}' is the wrong answer ;(. The correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    return null;
  };
  return iter(0);
};
