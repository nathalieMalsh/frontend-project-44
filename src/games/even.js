import readlineSync from 'readline-sync';
import { greeting } from '../index.js';

const userName = greeting();

export const isEven = (number) => (number % 2 === 0);

export const getNumber = () => {
  const randomNumber = Math.floor(Math.random() * 101);
  return randomNumber;
};

export const round = () => {
  const numberForGame = getNumber();
  const correctAnswer = (isEven(numberForGame)) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no". Question: ${numberForGame} Your answer: `);

  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}! `);
  return false;
};

export const playGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = round();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
