import readlineSync from 'readline-sync';

export const greeting = () => {
  const userName = readlineSync.question('Welcome to the Brain Games! May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const round = (gameTask, ruleOfGame) => {
  const userAnswer = readlineSync.question(`${ruleOfGame} Question:${gameTask}\nYour answer:`);
  return userAnswer;
};

export const isCorrect = (userAnswer, correctAnswer) => {
  if (correctAnswer === userAnswer) {
    return true;
  }
  return false;
};

const roundCount = 3;

export const playGame = (getTaskAndCorrectAnswer) => {
  const userName = readlineSync.question('Welcome to the Brain Games! May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < roundCount; i += 1) {
    const gameSet = getTaskAndCorrectAnswer();
    const { gameTask, correctAnswer, ruleOfGame } = gameSet;
    const userAnswer = round(gameTask, ruleOfGame);

    if (!isCorrect(userAnswer, correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
